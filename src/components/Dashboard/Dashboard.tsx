import React, { ReactElement } from 'react';
import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import Widget from '@/components/Widget/Widget';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';

interface DashboardProps {
	children: React.ReactNode;
}

interface DashboardSectionProps {
	title: string;
	children: React.ReactNode;
}

type WidgetComponentType = typeof WidgetHeader | typeof WidgetContainer;

interface WidgetProps {
	category: string;
	[key: string]: any;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
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
};

const DashboardSection: React.FC<DashboardSectionProps> = ({
	title,
	children,
}) => {
	return (
		<>
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
		</>
	);
};

export { Dashboard, DashboardSection };
