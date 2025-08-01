import Link from 'next/link';

type NavigationButtonProperties = {
	icon: React.ReactNode;
	linkName: string;
	path: string;
};

function NavigationButton({ icon, linkName, path }: NavigationButtonProperties) {
	return (
		<div>
			<span>{icon}</span>
			<Link href={path}>{linkName}</Link>
		</div>
	);
}

export { NavigationButton };
