'use client';
import styles from '@/styles/components/modal.module.css';
import { FormEvent, useState } from 'react';

function Modal() {
	const [transaction, setTransaction] = useState({
		amount: 0,
		accounts: '',
		category: '',
		description: '',
	});

	const [feedback, setFeedback] = useState('');

	
	return (
		<div
			id={styles.modalContainer}
			className='max-w-md h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[32px] rounded-lg flex flex-col gap-[1rem]'
		>
			<h1 className={styles.header}>New Transaction</h1>
			<nav className={styles.navigation}>
				<button className={styles.expenseButton}>Expense</button>
				<button className={styles.inconeButton}>Income</button>
				<button className={styles.transferButton}>Transfer</button>
			</nav>
			<form
				className={styles.form}
			>
				<div>
					<label
						htmlFor='amount'
						className=''
					>
						Amount
						<span> {feedback}</span>
						<input
							id='amount'
							type='number'
							placeholder='Enter amount'
							value={transaction.amount}
							onChange={(e) =>
								setTransaction((prev) => ({
									...prev,
									amount: Number(e.target.value),
								}))
							}
						/>
					</label>
					<label htmlFor='accounts'>
						Account
						<select
							name='accounts'
							id='accounts'
							className={styles.selector}
							onChange={(e) =>
								setTransaction((prev) => ({
									...prev,
									accounts: e.target.value,
								}))
							}
						>
							<option value='cash'>Cash</option>
							<option value='gotyme'>GoTyme</option>
							<option value='seabank'>Seabank</option>
						</select>
					</label>
				</div>
				<div>
					<label htmlFor='category'>
						Category
						<select
							name='category'
							id='category'
							className={styles.selector}
							onChange={(e) =>
								setTransaction((prev) => ({
									...prev,
									category: e.target.value,
								}))
							}
						>
							<optgroup label='food-and-drinks'>
								<option value='restaurant'>Restaurant</option>
								<option value='groceries'>Groceries</option>
								<option value='cafe'>Cafe</option>
							</optgroup>
							<optgroup label='Shopping'>
								<option value='clothes'>Clothes</option>
								<option value='pants'>Pants</option>
								<option value='beauty'>Beauty</option>
							</optgroup>
						</select>
					</label>
				</div>
				<label htmlFor='description'>
					Description
					<textarea
						className={styles.description}
						name='description'
						id='description'
						placeholder='Enter description (optional)'
						onChange={(e) =>
							setTransaction((prev) => ({
								...prev,
								description: e.target.value,
							}))
						}
					></textarea>
				</label>
				<button
					type='submit'
					className={styles.saveButton}
				>
					Save
				</button>
			</form>
		</div>
	);
}

export default Modal;
