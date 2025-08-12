'use client';
import styles from '@/styles/home.module.css';
import { format } from 'date-fns';
import { useStorage } from '@/context/useStorage';
import RightSideBar from '@/components/RightSideBar';
import { MainCard, SubCard, AccountCard } from '@/components/ui/Card';
import MainModal from '@/components/MainModal';
import accounts from '@/utils/accounts';
import { useEffect, useState } from 'react';
import { NavigationProvider } from '@/context/useNavigation';

function Home() {
	// temporary storage using context for development purposes
	const { isClick, netWorth, totalAssets, totalLiabilities } = useStorage();
	const [timeStamp, setTimeStamp] = useState('');

	useEffect(() => {
		const formattedDate = format(new Date(), 'MMMM, dd, yyyy');
		setTimeStamp(formattedDate);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.content}>
				<MainCard
					title='Net Worth'
					currency='$'
					balance={netWorth}
					date={`${timeStamp}`}
				/>
				<div className='w-full min-h-[100%] grid grid-rows-2 gap-[12px] '>
					<SubCard
						title='Assets'
						balance={totalAssets}
						currency='$'
						date={`${timeStamp}`}
					/>
					<SubCard
						title='Liabilities'
						balance={totalLiabilities}
						currency='$'
						date={`${timeStamp}`}
					/>
				</div>

				<div>
					<h1>Chart here</h1>
				</div>
			</section>
			<section>
				<RightSideBar>
					{accounts.map((account) => (
						<AccountCard
							key={account.id}
							balance={account.balance}
							accountName={account.accountName}
							accountCategory={account.accountCategory}
						/>
					))}
				</RightSideBar>
			</section>
			<NavigationProvider>{isClick ? <MainModal /> : ''}</NavigationProvider>
		</div>
	);
}

export default Home;
