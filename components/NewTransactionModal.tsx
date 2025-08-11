'use client';
import { useStorage } from '@/context/useStorage';
import styles from '@/styles/components/modal.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

function NewTransactionModal() {
	const {
		netWorth,
		totalAssets,
		totalLiabilities,
		setNetWorth,
		setTotalAssets,
		setTotalLiabilities,
	} = useStorage();
	const [transaction, setTransaction] = useState({
		type: 'expense',
		amount: 0,
		accounts: '',
		category: '',
		description: '',
	});
	const [feedback, setFeedback] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!transaction.amount) {
			setFeedback('Amount should not be zero or empty!');
			return;
		}
		const newNetWorth = netWorth + transaction.amount;
		const newTotalAssets = totalAssets + transaction.amount;
		const newTotalLiabilities = totalLiabilities + transaction.amount;

		setNetWorth(newNetWorth);
		setTotalAssets(newTotalAssets);
		setTotalLiabilities(newTotalLiabilities);

		const transactionInformation = {
			transactionType: transaction.type,
			transactionAmount: transaction.amount,
			transactionAccount: transaction.accounts,
			transactionCategory: transaction.category,
			transactionDescription: transaction.description,
		};

		const jsonString = JSON.stringify(transactionInformation);

		clientRequest(jsonString);
	};

	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const testValue = /^-?\d*\.?\d*$/.test(inputValue);
		if (testValue) {
			setTransaction((prev) => ({ ...prev, amount: parseInt(inputValue, 10) }));
		}
	};

	return (
		<div id={styles.modalContainer}>
			<h1 className={styles.header}>New Transaction</h1>
			<nav className={styles.navigation}>
				<button
					className={transaction.type === 'expense' ? styles.active : ''}
					onClick={() =>
						setTransaction((prev) => ({ ...prev, type: 'expense' }))
					}
				>
					Expense
				</button>
				<button
					className={transaction.type === 'income' ? styles.active : ''}
					onClick={() =>
						setTransaction((prev) => ({ ...prev, type: 'income' }))
					}
				>
					Income
				</button>
				<button
					className={transaction.type === 'transfer' ? styles.active : ''}
					onClick={() =>
						setTransaction((prev) => ({ ...prev, type: 'transfer' }))
					}
				>
					Transfer
				</button>
			</nav>
			<form
				className={styles.form}
				onSubmit={handleSubmit}
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
							value={transaction.amount === 0 ? '' : transaction.amount}
							onChange={handleAmountChange}
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

async function clientRequest(data: string) {
	const fetchRequest = await fetch('/transaction', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: data,
	});

	const response = await fetchRequest.json();
	return response;
}

export default NewTransactionModal;
