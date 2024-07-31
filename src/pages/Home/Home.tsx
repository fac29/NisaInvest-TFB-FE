import Carousel from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import Widget from '@/components/Widget/Widget';

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
			<Widget category='expenses' isCoreTask={false} />
		</>
	);
}

export default Home;
