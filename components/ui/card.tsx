type Cards = {
	title: string;
	balance: number;
	currency: string;
	date?: string;
	style?: string;
    headColor?: string;
	accountName?: string;
	accountCategory?: string;
};

function MainCard({ style, title, balance, currency, date }: Cards) {
	return (
		<div className={style}>
			<h1 className='font-outfit text-[3rem] text-purple-600 justify-self-center'>{title}</h1>
			<h2 className='text-[3rem]'>
				<span className="text-yellow-400">{currency} </span>
				{balance}
			</h2>
			<h3 className=''>As of {date}</h3>
		</div>
	);
}

function SubCard({ style, headColor, title, balance, currency, date }: Cards) {
	return (
		<div className={style}>
			<h1 className={headColor}>{title}</h1>
			<h2 className="text-[1.7rem]">
				<span>{currency}</span>
				{balance}
			</h2>
			<h3 className="justify-self-end self-end text-[0.8rem]">
				As of <span>{date}</span>
			</h3>
		</div>
	);
}

function AccountCard({
	title,
	currency,
	balance,
	accountName,
	accountCategory,
}: Cards) {
	return (
		<div>
			<h1>{title}</h1>
			<h2>
				<span>{currency}</span>
				{balance}
			</h2>
			<div>
				<span>{accountName}</span>
				<span>{accountCategory}</span>
			</div>
		</div>
	);
}

export { MainCard, AccountCard, SubCard };
