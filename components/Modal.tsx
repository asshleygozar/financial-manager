function Modal() {
	return (
		<div className='bg-zinc-400 w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[32px]  '>
			<h1>New Transaction</h1>
			<nav>
				<button>Expense</button>
				<button>Income</button>
				<button>Transfer</button>
			</nav>
			<form>
				<div>
					<label htmlFor='amount'>
						Amount
						<input
							id='amount'
							type='number'
							placeholder='Enter amount'
						/>
					</label>
					<label htmlFor='accounts'>
						<select
							name='accounts'
							id='accounts'
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
					<textarea
						name='description'
						id='description'
						placeholder='Enter description (optional)'
					></textarea>
				</label>
			</form>
		</div>
	);
}

export default Modal;
