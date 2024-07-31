import CarouselQuote from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';

function Home() {
	return (
		<>
			<div className='h-screen flex flex-col items-center justify-around'>
				<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>
				<CarouselQuote quotes={quotes} />
				<div className='flex justify-center'>
					<CarouselTestimonial
						testimonials={testimonials}
					></CarouselTestimonial>
        <ProfileCard
				name='Fahan Ibrahim-Hashi'
				position='Financial Advisor'
				imageUrl='placeholder'
				bioPage='fahan'
			></ProfileCard>
				</div>
			</div>
		</>
	);
}

export default Home;
