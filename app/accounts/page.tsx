'use client';
import { useStorage } from '@/context/useStorage';
import Modal from '@/components/Modal';

function Accounts() {
	const { isClick } = useStorage();
	return (
		<div>
			<nav>Accounts</nav>
			<section>
				{/* Total amount here*/}
				<div>
					<h1>Current total balance</h1>
					<h2>
						<span>$</span>1,000,000
					</h2>
					<h3>Overall</h3>
				</div>
			</section>
			<section>
				{' '}
				{/*Accounts container here*/}
				{/* Maybe use map here to generate dynamic accounts */}
				<div>
					<h1>Balance</h1>
					<h2>
						<span>$</span>1,000,000
					</h2>
					<div>
						<span>Cash</span>
						<span>Cash</span>
					</div>
				</div>
			</section>
			{isClick ? <Modal /> : ''}
		</div>
	);
}

export default Accounts;
