import CarouselQuote from '@/components/CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import fahanImage from '/fahan_square.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<main className='min-h-screen h-fit'>
			{/* Section #1 */}
			<div className='h-screen w-full bg-lilac flex flex-col items-center justify-around px-8'>
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
			<div className='h-auto w-full bg-white flex flex-col items-center justify-around p-8'>
				<blockquote className='border-lilac border-l-8 pl-4 max-w-xl space-y-4'>
					<p>
						Anas ibn Malik reported: A man said, “O Messenger of Allah, should I
						tie my camel and trust in Allah, or should I leave her untied and
						trust in Allah?” The Prophet, peace and blessings be upon him, said,
						“Tie her and trust in Allah.”
					</p>
					<footer>– Sunan al-Tirmidhī 2517</footer>
				</blockquote>
			</div>
			{/* Section #3 */}
			<div className='h-screen w-full bg-offWhite flex flex-col items-center justify-around px-8'>
				<blockquote className='border-lilac border-l-8 pl-4 max-w-xl'>
					<p>
						“Salaam, I'm Fahan, founder of Nisa Invest. As we navigate life's
						incredible milestones, managing our finances is a challenge we all
						face. As a Muslim woman working in finance, I sought knowledge and
						guidance from various sources to ensure my actions align with my
						values. I realised this process needs to be simpler. It should feel
						like having a conversation with someone who is genuinely ready to
						help you.”
					</p>
				</blockquote>
			</div>
			{/* Section #4 */}
			<div className='h-screen w-full bg-offWhite flex flex-col items-center justify-around px-8'>
				<ProfileCard
					name='Fahan Ibrahim-Hashi'
					position='Financial Advisor'
					imageUrl={fahanImage}
					bioPage='fahan'
				></ProfileCard>
				<div className='flex justify-center'>
					<CarouselTestimonial
						testimonials={testimonials}
					></CarouselTestimonial>
				</div>
			</div>
		</main>
	);
}

export default Home;
