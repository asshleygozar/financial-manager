'use client';
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
		<div className='h-screen w-full bg-gray-200 grid grid-cols-[1fr_300px]'>
			<section className='bg-(--background) grid grid-cols-2 grid-rows-2 place-items-center gap-[1rem] p-[1rem]'>
				<MainCard
					style='bg-(--card-background) w-full min-h-[100%] col-start-[1] col-end-[2] rounded-lg flex flex-col justify-between p-[1rem]'
					title='Net Worth'
					currency='$'
					balance={netWorth}
					date={`${format(new Date(), 'MMMM, dd ,yyyy')}`}
				/>
				<div className='w-full min-h-[100%] grid grid-rows-2 gap-[12px] '>
					<SubCard
						title='Assets'
						headColor='text-[1.1rem] text-green-500'
						balance={totalAssets}
						currency='$'
						date={`${format(new Date(), 'MMMM, dd ,yyyy')}`}
					/>
					<SubCard
						title='Liabilities'
						headColor='text[1.1rem] text-red-500'
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
					<div>Children nodes here</div>
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
