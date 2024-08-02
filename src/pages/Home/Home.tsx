import CarouselQuote from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<div className='min-h-screen h-fit'>
				{/* Section #1 */}
				<div className='h-screen w-full bg-lilac flex flex-col items-center justify-around'>
					<div className='max-w-[950px] flex flex-col justify-between gap-6'>
						<div className='flex gap-4'>
							<div>
								<h1 className='font-playfair italic font-bold text-offWhite text-6xl mb-6'>
									Wealth management to help you tie your camel
								</h1>
								<p className='font-source-sans text-offWhite text-2xl'>
									Tailored personal finance by and for Muslim women
								</p>
							</div>
							<div className='flex-shrink-0 w-[200px] h-[200p]'>
								<img
									className='w-full h-full object-cover'
									src='./camel_logo.png'
									alt='Picture of a cartoon camel'
								/>
							</div>
						</div>
						<div className='flex gap-4'>
							<Button variant={'outline'}>
								<Link to={'/about'}>Learn More</Link>
							</Button>
							<Button variant={'outline'}>
								<Link to={'/booking'}>Book My Session</Link>
							</Button>
						</div>
					</div>
				</div>
				{/* Section #2 */}
				<div className='h-screen w-full bg-offWhite flex flex-col items-center justify-around'>
					{' '}
					<CarouselQuote quotes={quotes} />
				</div>
				{/* Section #3 */}
				<div className='h-screen w-full bg-offWhite flex flex-col items-center justify-around'>
					<ProfileCard
						name='Fahan Ibrahim-Hashi'
						position='Financial Advisor'
						imageUrl='/Fahan_Ibrahim-Hashi.jpeg'
						bioPage='fahan'
					></ProfileCard>
					<div className='flex justify-center'>
						<CarouselTestimonial
							testimonials={testimonials}
						></CarouselTestimonial>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
