import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import Widget from '@/components/Widget/Widget';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';
import useFetch from '@/utils/fetchData';
import {
	DashboardContainer,
	DashboardSection,
} from '@/components/Dashboard/Dashboard';

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
		<div>
			<DashboardContainer>
				<DashboardSection title='Alhambulillah I can say that:'>
					<WidgetHeader category='savings' heading='Emergency Savings'>
						{addWidgets(goalsData, 'completed', 'savings')}
					</WidgetHeader>
					<WidgetHeader category='expenses' heading='Managing Expenses'>
						{addWidgets(goalsData, 'completed', 'expenses')}
					</WidgetHeader>
					<WidgetHeader category='investing' heading='Investing in the Future'>
						{addWidgets(goalsData, 'completed', 'investing')}
					</WidgetHeader>
					<WidgetHeader category='charity' heading='Giving Back'>
						{addWidgets(goalsData, 'completed', 'charity')}
					</WidgetHeader>
				</DashboardSection>
				<DashboardSection title='My current focus is to inshAllah say that:'>
					<WidgetContainer category='savings'>
						{addWidgets(goalsData, 'focused', 'savings')}
					</WidgetContainer>
					<WidgetContainer category='expenses'>
						{addWidgets(goalsData, 'focused', 'expenses')}
					</WidgetContainer>
					<WidgetContainer category='investing'>
						{addWidgets(goalsData, 'focused', 'investing')}
					</WidgetContainer>
					<WidgetContainer category='charity'>
						{addWidgets(goalsData, 'focused', 'charity')}
					</WidgetContainer>
				</DashboardSection>
				<DashboardSection title='These are the items I can work through:'>
					<WidgetContainer category='savings'>
						{addWidgets(goalsData, ['not_done', null], 'savings')}
					</WidgetContainer>
					<WidgetContainer category='expenses'>
						{addWidgets(goalsData, ['not_done', null], 'expenses')}
					</WidgetContainer>
					<WidgetContainer category='investing'>
						{addWidgets(goalsData, ['not_done', null], 'investing')}
					</WidgetContainer>
					<WidgetContainer category='charity'>
						{addWidgets(goalsData, ['not_done', null], 'charity')}
					</WidgetContainer>
				</DashboardSection>
			</DashboardContainer>
			``
		</div>
	);
};
	

export default Dashboard;
