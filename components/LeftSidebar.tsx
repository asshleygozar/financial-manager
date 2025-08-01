'use client';
import styles from '@/styles/components/left-side-bar.module.css';
import { NavigationButton } from './ui/navbutton';
import { useStorage } from '@/context/useStorage';
import { usePathname } from 'next/navigation';
import { Home, Account, Investment, Settings } from './ui/icons';

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
				className={pathname === '/home' ? styles.active : ''}
				icon={<Home />}
				linkName='Home'
				path='/home'
			/>
			<NavigationButton
				className={pathname === '/accounts' ? styles.active : ''}
				icon={<Account />}
				linkName='Accounts'
				path='/accounts'
			/>
			<NavigationButton
				className={pathname === '/investments' ? styles.active : ''}
				icon={<Investment />}
				linkName='Investments'
				path='/investments'
			/>
			<NavigationButton
				className={pathname === '/settings' ? styles.active : ''}
				icon={<Settings />}
				linkName='Settings'
				path='/settings'
			/>
		</aside>
	);
}

export default LeftSidebar;
