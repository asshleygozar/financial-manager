'use server';

export type ActionResponse = {
	success: boolean;
	message: string;
	error?: string;
};

export async function signIn(formData: FormData): Promise<ActionResponse> {
	return {
		success: false,
		message: 'Something went wrong',
	};
}
