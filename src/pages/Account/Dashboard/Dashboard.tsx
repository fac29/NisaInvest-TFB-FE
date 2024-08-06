import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import Widget from '@/components/Widget/Widget';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';
import useFetch from '@/utils/fetchData';
import {
	DashboardContainer,
	DashboardSection,
} from '@/components/Dashboard/Dashboard';
import { DashboardLayout } from '@/components/Dashboard/Dashboard';

const baseUrl = import.meta.env.VITE_BASE_URL;

// Define the types for the goals data structure
interface Goal {
	id: number;
	title: string;
	category: 'savings' | 'expenses' | 'investing' | 'charity';
	created_at: string;
	sort_order: number;
	description: string;
	is_recurrent: boolean;
	recurrence_type: string | null;
	recurrence_value: string | null;
	status: 'completed' | 'focused' | 'not_done' | null;
}

interface CategorizedGoal {
	category: 'savings' | 'expenses' | 'investing' | 'charity';
	goals: Goal[];
}

interface GoalsData {
	message: string;
	categorizedGoals: CategorizedGoal[];
}

function Dashboard() {
	const userId = 1; // this should be checked against the logged in user

	const goalsData = useFetch<GoalsData>(`${baseUrl}/goals/user/${userId}`)
		.data as GoalsData;

	/* 	function to filter through user goals based on status and category in order to populate the dashboard sections. 
	Usage eg:
	{addWidgets(goalsData, 'completed', 'savings')} 
	*/

	function addWidgets(
		data: GoalsData,
		status?:
			| ('completed' | 'focused' | 'not_done' | null)[]
			| ('completed' | 'focused' | 'not_done' | null),
		category?: 'savings' | 'expenses' | 'investing' | 'charity'
	) {
		if (!data || !data.categorizedGoals) return null;
		console.log(data);
		const matchingWidgets = data.categorizedGoals
			.filter((categorizedGoal) => categorizedGoal.category === category)
			.flatMap((categorizedGoal) => categorizedGoal.goals)
			.filter((goal) => {
				if (Array.isArray(status)) {
					return status.includes(goal.status);
				}
				return goal.status === status;
			})
			.map((goal) => (
				<Widget
					key={goal.id}
					category={goal.category}
					description={goal.description}
					isCoreTask={goal.is_recurrent}
				/>
			));

		return matchingWidgets;
	}

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
