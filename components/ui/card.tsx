import styles from '@/styles/components/ui/card.module.css';
type Cards = {
	title?: string;
	balance: number;
	currency?: string;
	date?: string;
	headColor?: string;
	accountName?: string;
	accountCategory?: string;
};

function MainCard({ title, balance, currency, date }: Cards) {
	return (
		<div className={`${styles.mainCard} ${styles.card}`}>
			<h1>{title}</h1>
			<h2>
				<span>{currency} </span>
				{balance}
			</h2>
			<h3>As of {date}</h3>
		</div>
	);
}

function SubCard({ title, balance, currency, date }: Cards) {
	return (
		<div className={`${styles.subCard} ${styles.card}`}>
			<h1>{title}</h1>
			<h2>
				<span>{currency}</span>
				{balance}
			</h2>
			<h3>
				As of <span>{date}</span>
			</h3>
		</div>
	);
}

function AccountCard({ balance, accountName, accountCategory }: Cards) {
	return (
		<div className={`${styles.accountCard} ${styles.card}`}>
			<h1>Balance</h1>
			<h2>
				<span>$</span>
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
