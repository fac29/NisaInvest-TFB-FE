import { Loader2, ChevronsUpDown } from 'lucide-react';
import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';
import useFetch from '@/utils/fetchData';
import Widget from '@/components/Widget/Widget';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '../ui/button';

const baseUrl = import.meta.env.VITE_BASE_URL;

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

export interface DashboardProps {
	userId: number;
}

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
	data: GoalsData | null,
	userId: number,
	updateGoalStatus: (
		goalId: number,
		newStatus: 'completed' | 'focused' | 'not_done' | null
	) => void,
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
				goalId={goal.id}
				userId={userId}
				status={goal.status}
				updateGoalStatus={updateGoalStatus}
			/>
		));

	return matchingWidgets;
}

export function DashboardContainer({ children }: DashboardContainerProps) {
	const sections = React.Children.toArray(children);

	return (
		<div className='container min-h-screen mx-auto p-4'>
			{sections.map((section, index) => {
				if (React.isValidElement<DashboardSectionProps>(section)) {
					const [isOpen, setIsOpen] = React.useState(true);
					return (
						<Collapsible
							open={isOpen}
							onOpenChange={setIsOpen}
							key={index}
							className='lg:min-w-[1000px]'
						>
							<div key={index} className='p-4 rounded-lg'>
								<div className='flex gap-4 items-center bg-lilac rounded-lg p-2 mb-4'>
									<div className='flex items-center justify-center w-10 h-10 bg-offWhite rounded-full'>
										<p className='text-xl font-bold'>{index + 1}</p>
									</div>
									<div className='w-full flex justify-between items-center'>
										<h2 className='w-fit text-xl font-bold'>
											{section.props.title}
										</h2>
										<CollapsibleTrigger>
											<Button
												variant='ghost'
												size='sm'
												className='w-9 p-0 hover:bg-offWhite hover:bg-opacity-20'
											>
												<ChevronsUpDown className='h-4 w-4' />
											</Button>
										</CollapsibleTrigger>
									</div>
								</div>
								<CollapsibleContent>
									<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
										{section.props.children}
									</div>
								</CollapsibleContent>
							</div>
						</Collapsible>
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

	useEffect(() => {
		if (fetchGoals.data) {
			setGoalsData(fetchGoals.data as GoalsData);
			setIsLoading(false);
		} else if (fetchGoals.error) {
			setIsLoading(false);
		}
	}, [fetchGoals.data, fetchGoals.error]);

	const updateGoalStatus = useCallback(
		(
			goalId: number,
			newStatus: 'completed' | 'focused' | 'not_done' | null
		) => {
			if (!goalsData) return;

			const updatedGoalsData = {
				...goalsData,
				categorizedGoals: goalsData.categorizedGoals.map((categorizedGoal) => ({
					...categorizedGoal,
					goals: categorizedGoal.goals.map((goal) =>
						goal.id === goalId ? { ...goal, status: newStatus } : goal
					),
				})),
			};

			setGoalsData(updatedGoalsData);
		},
		[goalsData]
	);

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
			<DashboardContainer>
				<DashboardSection title='Alhamdulillah I can say that:'>
					<WidgetHeader category='savings' heading='Emergency Savings'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'completed',
							'savings'
						)}
					</WidgetHeader>
					<WidgetHeader category='expenses' heading='Managing Expenses'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'completed',
							'expenses'
						)}
					</WidgetHeader>
					<WidgetHeader category='investing' heading='Investing in the Future'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'completed',
							'investing'
						)}
					</WidgetHeader>
					<WidgetHeader category='charity' heading='Giving Back'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'completed',
							'charity'
						)}
					</WidgetHeader>
				</DashboardSection>
				<DashboardSection title='My current focus is to inshAllah say that:'>
					<WidgetContainer category='savings'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'focused',
							'savings'
						)}
					</WidgetContainer>
					<WidgetContainer category='expenses'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'focused',
							'expenses'
						)}
					</WidgetContainer>
					<WidgetContainer category='investing'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'focused',
							'investing'
						)}
					</WidgetContainer>
					<WidgetContainer category='charity'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							'focused',
							'charity'
						)}
					</WidgetContainer>
				</DashboardSection>
				<DashboardSection title='These are the items I can work through:'>
					<WidgetContainer category='savings'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							['not_done', null],
							'savings'
						)}
					</WidgetContainer>
					<WidgetContainer category='expenses'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							['not_done', null],
							'expenses'
						)}
					</WidgetContainer>
					<WidgetContainer category='investing'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							['not_done', null],
							'investing'
						)}
					</WidgetContainer>
					<WidgetContainer category='charity'>
						{addWidgets(
							goalsData,
							userId,
							updateGoalStatus,
							['not_done', null],
							'charity'
						)}
					</WidgetContainer>
				</DashboardSection>
			</DashboardContainer>
		</div>
	);
}
