import CarouselQuote from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import Widget from '@/components/Widget/Widget';
import WidgetHeader from '@/components/WidgetHeader/WidgetHeader';

function Home() {
	return (
		<>
			<div className='min-h-screen h-fit flex flex-col items-center justify-around'>
				<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>
				<CarouselQuote quotes={quotes} />
				<div className='flex justify-center'>
					<CarouselTestimonial
						testimonials={testimonials}
					></CarouselTestimonial>
				</div>
				<ProfileCard
					name='Fahan Ibrahim-Hashi'
					position='Financial Advisor'
					imageUrl='placeholder'
					bioPage='fahan'
				></ProfileCard>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-1 items-start justify-items-center'>
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
		</>
	);
}

export default Home;

function setWidget(headerCategory: string, widgets: Widget[]) {
	widgets.map((widget) =>
		widget.category == headerCategory ? <Widget /> : ''
	);
}
