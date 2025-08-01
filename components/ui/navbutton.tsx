import Link from 'next/link';

type NavigationButtonProperties = {
	className?: string;
	icon: React.ReactNode;
	linkName: string;
	path: string;
};

function NavigationButton({ className, icon, linkName, path }: NavigationButtonProperties) {
	return (
		<div className={className}>
			<span>{icon}</span>
			<Link href={path}>{linkName}</Link>
		</div>
	);
}

export { NavigationButton };
