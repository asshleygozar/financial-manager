'use client';
import { useStorage } from '@/context/useStorage';
import Modal from '@/components/NewTransactionModal';
import styles from '@/styles/accounts.module.css';
import { MainCard, AccountCard } from '@/components/ui/card';
import { format } from 'date-fns';
import accounts from '@/utils/accounts';

function Accounts() {
	const { isClick } = useStorage();
	return (
		<div className={styles.container}>
			<section>
				{/* Total amount here*/}
				<MainCard
					title='Total balance'
					balance={2928}
					date={`${format(new Date(), 'MMMM, dd, yyyy')}`}
				/>
			</section>
			<section className={styles.accountsContainer}>
				{accounts.map((account) => (
					<AccountCard
						key={account.id}
						balance={account.balance}
						accountName={account.accountName}
						accountCategory={account.accountCategory}
					/>
				))}
			</section>
			{isClick ? <Modal /> : ''}
		</div>
	);
}

export default Accounts;
