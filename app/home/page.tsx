'use client';
import { useState } from 'react';
import { useStorage } from '@/context/useStorage';
import Modal from '@/components/Modal';
import RightSideBar from '@/components/RightSideBar';
import { MainCard, SubCard, AccountCard } from '@/components/ui/card';

function Home() {
	const [isClick, setClick] = useState(false);
	const handleClick = isClick ? false : true;

	// temporary storage using context for development purposes
	const { storage } = useStorage();

	return (
		<div className='h-screen w-full bg-gray-200 grid grid-cols-[1fr_300px]'>
			<section className='bg-green-400 grid grid-cols-2 grid-rows-2'>
				<div className='col-start-[1] col-end-[2] bg-pink-500'>
					<MainCard
						title='Net Worth'
						currency='$'
						balance={storage[0].netWorth}
						date={`${new Date()}`}
					/>
				</div>

				<div className='grid grid-rows-2'>
					<div className='bg-yellow-400 row-start-1 row-end-2'>
						<SubCard
							title='Total Assets'
							balance={storage[0].totalAssets}
							currency='$'
							date={`${new Date()}`}
						/>
					</div>
					<div className='bg-red-400'>
						<SubCard
							title='Total Liabilities'
							balance={storage[0].totalLiabilities}
							currency='$'
							date={`${new Date()}`}
						/>
					</div>
				</div>

				<div><h1>Chart here</h1></div>
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
