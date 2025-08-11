'use client';
import { useNavigation } from '@/context/useNavigation';

const ModalNavigation = () => {
	const { setNavigation } = useNavigation();
	return (
		<nav>
			<ul>
				<li onClick={() => setNavigation('new-transaction')}>
					New transaction
				</li>
				<li onClick={() => setNavigation('create-account')}>Create account</li>
			</ul>
		</nav>
	);
};

export default ModalNavigation;
