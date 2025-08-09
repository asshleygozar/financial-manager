import styles from '@/styles/create-account.module.css';
import { AccountCard } from './ui/card';

function CreateAccountModal() {
	return (
		<div className={styles.container}>
			<AccountCard
				balance={0.0}
				accountName='Cash'
				accountCategory='Cash'
			/>
			<AccountCard
				balance={0.0}
				accountName='Cash'
				accountCategory='Cash'
			/>
		</div>
	);
}

export default CreateAccountModal;
