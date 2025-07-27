'use client';
import { NavigationButton } from './ui/navbutton';

function LeftSidebar() {
	return (
		<aside>
			<h1>Finance</h1>

			<NavigationButton
				linkName='Home'
				path='/home'
			/>
			<NavigationButton
				linkName='Accounts'
				path='/accounts'
			/>
			<NavigationButton
				linkName='Investments'
				path='/investments'
			/>
			<NavigationButton
				linkName='Settings'
				path='/settings'
			/>
		</aside>
	);
}

export default LeftSidebar;
