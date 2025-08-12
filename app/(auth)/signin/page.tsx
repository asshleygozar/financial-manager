'use client';

import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, FormGroup, FormInput } from '@/components/ui/Form';
import { signIn, ActionResponse } from '@/lib/auth';

const initialState: ActionResponse = {
	success: false,
	message: '',
	error: undefined,
};

export default function SignInPage() {
	const router = useRouter();
	const [state, formAction, isPending] = useActionState<
		ActionResponse,
		FormData
	>(async (prevState: ActionResponse, formData: FormData) => {
		try {
			const result = await signIn(formData);

			if (result.success) {
				router.push('/dashboard');
				router.refresh();
			}

			return result;
		} catch (err) {
			return {
				success: false,
				message: (err as Error).message || 'An error occured',
				error: undefined,
			};
		}
	}, initialState);
}
