import CarouselQuote from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';

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
					imageUrl='./Fahan_Ibrahim-Hashi.jpeg'
					bioPage='fahan'
				></ProfileCard>
			</div>
		</>
	);
}

export default Home;
