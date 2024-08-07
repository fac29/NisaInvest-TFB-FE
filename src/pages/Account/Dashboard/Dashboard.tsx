import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/Dashboard/Dashboard';
import { MyProfile } from '@/components/MyProfile/MyProfile';

function Dashboard() {
	const userId = 1; // this should be checked against the logged in user

	return (
		<Tabs defaultValue='dashboard' className='flex flex-col items-center'>
			<TabsList className='grid w-[400px] grid-cols-3'>
				<TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
				<TabsTrigger value='my_profile'>My Profile</TabsTrigger>
				<TabsTrigger value='notes'>Notes</TabsTrigger>
			</TabsList>
			<TabsContent value='dashboard'>
				<DashboardLayout userId={userId} />
			</TabsContent>
			<TabsContent value='my_profile'>
				<div className='min-h-screen'>
					<MyProfile userId={userId}></MyProfile>
				</div>
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
