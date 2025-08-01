'use client';
import styles from '@/styles/components/left-side-bar.module.css';
import { NavigationButton } from './ui/navbutton';
import { useStorage } from '@/context/useStorage';
import { Home, Account, Investment, Settings } from './ui/icons';

function LeftSidebar() {
	const { handleClick, setClick } = useStorage();
	return (
		<aside className={styles.container}>
			<h1>Finance</h1>

			<button
				className={styles.newTransactionButton}
				onClick={() => setClick(handleClick)}
			>
				Plus
			</button>

			<NavigationButton
				icon={<Home />}
				linkName='Home'
				path='/home'
			/>
			<NavigationButton
				icon={<Account />}
				linkName='Accounts'
				path='/accounts'
			/>
			<NavigationButton
				icon={<Investment />}
				linkName='Investments'
				path='/investments'
			/>
			<NavigationButton
				icon={<Settings />}
				linkName='Settings'
				path='/settings'
			/>
		</aside>
	);
}

export default LeftSidebar;
