import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/Dashboard/Dashboard';
import MyHome from '@/components/MyHome/MyHome';
import { useState } from 'react';

function Dashboard() {
	const [tab, setTab] = useState('home');
	const onTabChange = (value: string) => {
		setTab(value);
	};

	const userId = 1; // this should be checked against the logged in user

	return (
		<Tabs
			value={tab}
			onValueChange={onTabChange}
			className='flex flex-col items-center'
		>
			<TabsList className='grid w-[500px] grid-cols-6'>
				<TabsTrigger value='home'>Home</TabsTrigger>
				<TabsTrigger value='profile'>My Profile</TabsTrigger>
				<TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
				<TabsTrigger value='notes'>Notes</TabsTrigger>
				<TabsTrigger value='faqs'>FAQs</TabsTrigger>
				<TabsTrigger value='support'>Support</TabsTrigger>
			</TabsList>
			<TabsContent value='home'>
				<MyHome userId={1} setTab={setTab} />
			</TabsContent>
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
