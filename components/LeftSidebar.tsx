'use client';
import styles from '@/styles/components/left-side-bar.module.css';
import { NavigationButton } from './ui/Navbutton';
import { useStorage } from '@/context/useStorage';
import { usePathname } from 'next/navigation';
import { Home, Account, Investment, Settings } from './ui/Icons';

function LeftSidebar() {
	const pathname = usePathname();
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
				className={
					pathname === '/dashboard'
						? `${styles.active} ${styles.navigationButton}`
						: `${styles.navigationButton}`
				}
				icon={<Home />}
				linkName='Home'
				path='/dashboard/'
			/>
			<NavigationButton
				className={
					pathname === '/dashboard/accounts'
						? `${styles.active} ${styles.navigationButton}`
						: `${styles.navigationButton}`
				}
				icon={<Account />}
				linkName='Accounts'
				path='/dashboard/accounts'
			/>
			<NavigationButton
				className={
					pathname === '/dashboard/investments'
						? `${styles.active} ${styles.navigationButton}`
						: `${styles.navigationButton}`
				}
				icon={<Investment />}
				linkName='Investments'
				path='/dashboard/investments'
			/>
			<NavigationButton
				className={
					pathname === '/dashboard/settings'
						? `${styles.active} ${styles.navigationButton}`
						: `${styles.navigationButton}`
				}
				icon={<Settings />}
				linkName='Settings'
				path='/dashboard/settings'
			/>
		</aside>
	);
}

export default LeftSidebar;
