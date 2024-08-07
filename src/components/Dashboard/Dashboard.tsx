import { Loader2 } from 'lucide-react';
import React, { ReactElement, useEffect, useState } from 'react';
import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';
import useFetch from '@/utils/fetchData';
import Widget from '@/components/Widget/Widget';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from 'react-beautiful-dnd';
// Define the types for the component props
interface DashboardContainerProps {
	children: React.ReactNode;
}

interface DashboardSectionProps {
	title: string;
	children: React.ReactNode;
}

interface WidgetProps {
	category: string;
	[key: string]: any;
}

interface DashboardProps {
	userId: number;
}

// Import
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

export function DashboardContainer({ children }: DashboardContainerProps) {
	const sections = React.Children.toArray(children);

	return (
		<div className='container min-h-screen mx-auto p-4 space-y-8'>
			{sections.map((section, index) => {
				if (React.isValidElement<DashboardSectionProps>(section)) {
					return (
						<div key={index} className='p-4 rounded-lg'>
							<div className='flex gap-4 items-center bg-lilac rounded-lg p-4 mb-4'>
								<div className='flex items-center justify-center w-10 h-10 bg-offWhite rounded-full'>
									<p className='text-xl font-bold'>{index + 1}</p>
								</div>
								<h2 className='text-xl font-bold'>{section.props.title}</h2>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
								{section.props.children}
							</div>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}

export function DashboardSection({ title, children }: DashboardSectionProps) {
	return (
		<React.Fragment>
			{React.Children.map(children, (child) => {
				if (
					React.isValidElement<WidgetProps>(child) &&
					(child.type === WidgetHeader || child.type === WidgetContainer)
				) {
					return React.cloneElement(child as ReactElement<WidgetProps>, {
						category: child.props.category,
					});
				}
				return child;
			})}
		</React.Fragment>
	);
}

export function DashboardLayout({ userId }: DashboardProps) {
	const [isLoading, setIsLoading] = useState(true);
	const fetchGoals = useFetch<GoalsData>(`${baseUrl}/goals/user/${userId}`);
	const [goalsData, setGoalsData] = useState<GoalsData | null>(null);
	// const goalsData = fetchGoals.data as GoalsData;

	useEffect(() => {
		if (fetchGoals.data) {
		  setGoalsData(fetchGoals.data as GoalsData);
		  setIsLoading(false);
		} else if (fetchGoals.error) {
		  setIsLoading(false);
		}
	  }, [fetchGoals.data, fetchGoals.error]);
	
	  const onDragEnd = (result: DropResult) => {
		if (!result.destination || !goalsData) {
		  return;
		}
		const newGoalsData = { ...goalsData };

		const sourceCategoryIndex = newGoalsData.categorizedGoals.findIndex(
			(category) => category.category === result.source.droppableId
		  );
		  const destCategoryIndex = newGoalsData.categorizedGoals.findIndex(
			(category) => category.category === result.destination!.droppableId
		  );
	  
		  const [reorderedItem] = newGoalsData as .categorizedGoals[sourceCategoryIndex].goals.splice(result.source.index, 1);
		  newGoalsData.categorizedGoals[destCategoryIndex].goals.splice(result.destination.index, 0, reorderedItem);

		  setGoalsData(newGoalsData);
	  
	if (isLoading) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<Loader2 className='w-12 h-12 animate-spin text-lilac' />
			</div>
		);
	}

	if (fetchGoals.error) {
		console.log(fetchGoals.error);
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<p className='text-red-500'>
					Error loading dashboard data. Please try again later.
				</p>
			</div>
		);
	}

	return (
		<div>
			<DashboardContainer onDragEnd={onDragEnd}></DashboardContainer>
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
		</div>
	);
}
