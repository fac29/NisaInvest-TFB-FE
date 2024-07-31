import Carousel from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';

function Home() {
	return (
		<>
			<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>;
			<Carousel quotes={quotes} />
			<ProfileCard
				name='Fahan Ibrahim-Hashi'
				position='Financial Advisor'
				imageUrl='placeholder'
				bioPage='fahan'
			></ProfileCard>
		</>
	);
}

export default Home;
