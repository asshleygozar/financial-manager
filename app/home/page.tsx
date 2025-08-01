'use client';
import styles from '@/styles/home.module.css';
import { format } from 'date-fns';
import { useState } from 'react';
import { useStorage } from '@/context/useStorage';
import Modal from '@/components/Modal';
import RightSideBar from '@/components/RightSideBar';
import { MainCard, SubCard, AccountCard } from '@/components/ui/card';

function Home() {
	const [isClick, setClick] = useState(false);
	const handleClick = isClick ? false : true;

	// temporary storage using context for development purposes
	const { netWorth, totalAssets, totalLiabilities } = useStorage();

	return (
		<div className={styles.container}>
			<section className={styles.content}>
				<MainCard
					title='Net Worth'
					currency='$'
					balance={netWorth}
					date={`${format(new Date(), 'MMMM, dd ,yyyy')}`}
				/>
				<div className='w-full min-h-[100%] grid grid-rows-2 gap-[12px] '>
					<SubCard
						title='Assets'
						balance={totalAssets}
						currency='$'
						date={`${format(new Date(), 'MMMM, dd ,yyyy')}`}
					/>
					<SubCard
						title='Liabilities'
						balance={totalLiabilities}
						currency='$'
						date={`${format(new Date(), 'MMMM, dd ,yyyy')}`}
					/>
				</div>

				<div>
					<h1>Chart here</h1>
				</div>
			</section>
			<section className='bg-blue-400'>
				<RightSideBar>
					<AccountCard
						title='Balance'
						currency='$'
						balance={39273}
						accountName='GOTyme'
						accountCategory='Bank'
					/>
					<AccountCard
						title='Balance'
						currency='$'
						balance={39273}
						accountName='GOTyme'
						accountCategory='Bank'
					/>
					<AccountCard
						title='Balance'
						currency='$'
						balance={39273}
						accountName='GOTyme'
						accountCategory='Bank'
					/>
					<AccountCard
						title='Balance'
						currency='$'
						balance={39273}
						accountName='GOTyme'
						accountCategory='Bank'
					/>
					<AccountCard
						title='Balance'
						currency='$'
						balance={39273}
						accountName='GOTyme'
						accountCategory='Bank'
					/>
					<AccountCard
						title='Balance'
						currency='$'
						balance={39273}
						accountName='GOTyme'
						accountCategory='Bank'
					/>
					<button
						className='text-white bg-purple-500 hover:bg-sky-700 px-[16px]'
						onClick={() => setClick(handleClick)}
					>
						Add new transaction
					</button>
				</RightSideBar>
			</section>
			{isClick ? <Modal /> : ''}
		</div>
	);
}

export default Home;
