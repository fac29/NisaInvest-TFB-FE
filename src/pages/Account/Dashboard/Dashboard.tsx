import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import Widget from '@/components/Widget/Widget';
import WidgetContainer from '@/components/WidgetContainer/WidgetContainer';
import {
	DashboardContainer,
	DashboardSection,
} from '@/components/Dashboard/Dashboard';

function Dashboard() {
	return (
		<div className='pt-28'>
			<DashboardContainer>
				<DashboardSection title='Alhambulillah I can say that:'>
					<WidgetHeader category='savings' heading='Emergency Savings'>
						<Widget
							category='savings'
							description="I have at least 50% of one month's salary saved"
							isCoreTask={true}
						/>
					</WidgetHeader>
					<WidgetHeader category='expenses' heading='Managing Expenses'>
						<Widget
							category='expenses'
							description='I can login online to all my utility providers'
							isCoreTask={false}
						/>
					</WidgetHeader>
					<WidgetHeader category='investing' heading='Investing in the Future'>
						<Widget
							category='investing'
							description='I have a list of any outstanding debts'
							isCoreTask={false}
						/>
					</WidgetHeader>
					<WidgetHeader category='charity' heading='Giving Back'>
						<Widget
							category='charity'
							description='I purify any interest I receive in my bank accounts'
							isCoreTask={true}
						/>
						<Widget
							category='charity'
							description='I give back in person'
							isCoreTask={false}
						/>
					</WidgetHeader>
				</DashboardSection>
				<DashboardSection title='My current focus is to inshAllah say that:'>
					<WidgetContainer category='savings'>
						<Widget
							category='savings'
							description="I have at least 50% of one month's salary saved"
							isCoreTask={true}
						/>
					</WidgetContainer>
					<WidgetContainer category='expenses'>
						<Widget
							category='expenses'
							description='I can login online to all my utility providers'
							isCoreTask={false}
						/>
					</WidgetContainer>
					<WidgetContainer category='investing'>
						<Widget
							category='investing'
							description='I have a list of any outstanding debts'
							isCoreTask={false}
						/>
					</WidgetContainer>
					<WidgetContainer category='charity'>
						<Widget
							category='charity'
							description='I purify any interest I receive in my bank accounts'
							isCoreTask={true}
						/>
						<Widget
							category='charity'
							description='I give back in person'
							isCoreTask={false}
						/>
					</WidgetContainer>
				</DashboardSection>
				<DashboardSection title='These are the items I can work through:'>
					<WidgetContainer category='savings'>
						<Widget
							category='savings'
							description="I have at least 50% of one month's salary saved"
							isCoreTask={true}
						/>
					</WidgetContainer>
					<WidgetContainer category='expenses'>
						<Widget
							category='expenses'
							description='I can login online to all my utility providers'
							isCoreTask={false}
						/>
					</WidgetContainer>
					<WidgetContainer category='investing'>
						<Widget
							category='investing'
							description='I have a list of any outstanding debts'
							isCoreTask={false}
						/>
					</WidgetContainer>
					<WidgetContainer category='charity'>
						<Widget
							category='charity'
							description='I purify any interest I receive in my bank accounts'
							isCoreTask={true}
						/>
						<Widget
							category='charity'
							description='I give back in person'
							isCoreTask={false}
						/>
					</WidgetContainer>
				</DashboardSection>
			</DashboardContainer>
		</div>
	);
};
	

export default Dashboard;
