'use client';
import styles from '@/styles/components/modal-navigation.module.css';
import ModalNavigationButton from './ui/ModalNavButton';
import { useNavigation } from '@/context/useNavigation';
import { Account, Home } from './ui/icons';

const ModalNavigation = () => {
	const { navigation, setNavigation } = useNavigation();
	return (
		<nav className={styles.container}>
			<h1>Navigation</h1>
			<ModalNavigationButton
				className={
					navigation === 'new-transaction'
						? `${styles.button} ${styles.active}`
						: `${styles.button}`
				}
				icon={<Home />}
				name='New transaction'
				path='new-transaction'
				setNavigation={setNavigation}
			/>
			<ModalNavigationButton
				className={
					navigation === 'create-account'
						? `${styles.button} ${styles.active}`
						: `${styles.button}`
				}
				icon={<Account />}
				name='Create Account'
				path='create-account'
				setNavigation={setNavigation}
			/>
		</nav>
	);
};

export default ModalNavigation;
