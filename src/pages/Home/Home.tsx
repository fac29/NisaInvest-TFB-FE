import CarouselQuote from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';

function Home() {
	return (
		<>
			<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>
			<CarouselQuote quotes={quotes} />
			<div className='flex justify-center'>
				<CarouselTestimonial testimonials={testimonials}></CarouselTestimonial>
			</div>
		</>
	);
}

export default Home;
