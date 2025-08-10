import LeftSidebar from '@/components/LeftSidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='grid grid-cols-[250px_1fr]'>
			<LeftSidebar />
			{children}
		</main>
	);
};

export default DashboardLayout;
