import Link from 'next/link';

type NavigationButtonProperties = {
	linkName: string;
	path: string;
};

function NavigationButton({ linkName, path }: NavigationButtonProperties) {
	return (
		<div>
			<span>Icon here</span>
			<Link href={path}>{linkName}</Link>
		</div>
	);
}

export { NavigationButton };
