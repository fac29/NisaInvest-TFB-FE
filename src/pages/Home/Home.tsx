
import Carousel from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';

function Home() {
	return (
		<>
			<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>;
			<Carousel quotes={quotes} />

		</>
	);
}

export default Home;
