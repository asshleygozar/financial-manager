import styles from '@/styles/components/modal.module.css';

function Modal() {
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
			<form className={styles.form}>
				<div>
					<label
						htmlFor='amount'
						className=''
					>
						Amount
						<input
							id='amount'
							type='number'
							placeholder='Enter amount'
						/>
					</label>
					<label htmlFor='accounts'>
						Account
						<select
							name='accounts'
							id='accounts'
							className={styles.selector}
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
					></textarea>
				</label>
				<button type='submit' className={styles.saveButton}>Save</button>
			</form>
		</div>
	);
}

export default Modal;
