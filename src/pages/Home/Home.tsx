import Carousel from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';

function Home() {
	return (
		<>
			<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>;
			<Carousel quotes={quotes} />
			<TestimonialCard
				name='Deeqa'
				text='“I kept having people tell me that personal finance was a topic that made them feel uneasy, and after the talk, they left feeling self-assured.”'
			></TestimonialCard>
		</>
	);
}

export default Home;
