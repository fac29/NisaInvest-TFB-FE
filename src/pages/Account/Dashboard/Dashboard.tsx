import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/Dashboard/Dashboard';

function Dashboard() {
	const userId = 1; // this should be checked against the logged in user

	return (
		<Tabs defaultValue='dashboard' className='flex flex-col items-center'>
			<TabsList className='grid w-[400px] grid-cols-2'>
				<TabsTrigger value='dashboard'>Dashboard</TabsTrigger>

				<TabsTrigger value='notes'>Notes</TabsTrigger>
			</TabsList>
			<TabsContent value='dashboard'>
				<DashboardLayout userId={userId} />
			</TabsContent>
			<TabsContent value='notes'>
				<div className='min-h-screen'>
					<p>Notes go Here</p>
				</div>
			</TabsContent>
		</Tabs>
	);
}

export default Dashboard;
