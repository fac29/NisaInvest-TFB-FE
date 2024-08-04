import React, { ReactElement } from 'react';
import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';

interface DashboardProps {
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

export function DashboardContainer({ children }: DashboardProps) {
	const sections = React.Children.toArray(children);

	return (
		<div className='container min-h-screen mx-auto p-4 space-y-8'>
			{sections.map((section, index) => {
				if (React.isValidElement<DashboardSectionProps>(section)) {
					return (
						<div key={index} className='p-4 rounded-lg'>
							<div className='flex gap-4 items-center bg-lilac rounded-lg p-4 mb-4'>
								<div>
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