'use client';
import styles from '@/styles/components/main-modal.module.css';
import ModalNavigation from './ModalNavigation';
import { useNavigation } from '@/context/useNavigation';
import NewTransactionModal from './NewTransactionModal';
import CreateAccountModal from './CreateAccountModal';

const MainModal = () => {
	const { navigation } = useNavigation();
	const navigate = (target: string) => {
		switch (target) {
			case 'new-transaction':
				return <NewTransactionModal />;
				break;
			case 'create-account':
				return <CreateAccountModal />;
		}
	};

	return (
		<div className={styles.container}>
			<ModalNavigation />
			{navigate(navigation)}
		</div>
	);
};

export default MainModal;
