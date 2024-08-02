import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';
import Widget from '@/components/Widget/Widget';

function Dashboard() {
	return (
		<div className='container min-h-screen mx-auto p-4 space-y-8'>
			{/* Section 1 */}
			<div className='p-4 rounded-lg'>
				<div className='flex gap-4 items-center bg-lilac rounded-lg p-4 mb-4'>
					<div>
						<p className='text-xl font-bold'>1</p>
					</div>
					<h2 className='text-xl font-bold'>Alhambulillah I can say that:</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
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
				</div>
			</div>
			{/* Section 2 */}
			<div className='p-4 rounded-lg'>
				<div className='flex gap-4 items-center bg-lilac rounded-lg p-4 mb-4'>
					<div>
						<p className='text-xl font-bold'>1</p>
					</div>
					<h2 className='text-xl font-bold'>
						My current focus is to inshAllah say that:
					</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{[...Array(4)].map((_, colIndex) => (
						<div key={colIndex} className='bg-white p-4 rounded'>
							<h3 className='text-lg font-semibold mb-2'>
								Widget {colIndex + 1}
							</h3>
							<p className='text-gray-600'>
								Content Section, Widget {colIndex + 1}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* Section 3 */}
			<div className='p-4 rounded-lg'>
				<div className='flex gap-4 items-center bg-lilac rounded-lg p-4 mb-4'>
					<div>
						<p className='text-xl font-bold'>1</p>
					</div>
					<h2 className='text-xl font-bold'>
						These are the items I can work through:
					</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{[...Array(4)].map((_, colIndex) => (
						<div key={colIndex} className='bg-white p-4 rounded'>
							<h3 className='text-lg font-semibold mb-2'>
								Widget {colIndex + 1}
							</h3>
							<p className='text-gray-600'>
								Content Section, Widget {colIndex + 1}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
