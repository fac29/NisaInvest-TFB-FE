import { quotes } from '@/components/CarouselQuote/data';
import { CarouselTestimonial } from '@/components/CarouselTestimonial/CarouselTestimonial';
import { testimonials } from '@/components/CarouselTestimonial/Testimonials';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import fahanImage from '/fahan_square.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CarouselStages from '@/components/CarouselStages/CarouselStages';
import StepsCard from '@/components/StepsCard/StepsCard';
import { stepsList } from '../Advisors/Advisors';
import camelImage from '/camel_logo.png'

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
								//src='./camel_logo.png'
								src = {camelImage}
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
			<div className='min-h-screen w-full bg-offWhite flex items-center justify-around px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl pt-8 mx-auto items-center'>
					<blockquote className='border-lilac border-l-8 pl-4 max-w-xl'>
						<p>
							“Salaam, I'm Fahan, founder of Nisa Invest. As we navigate life's
							incredible milestones, managing our finances is a challenge we all
							face. As a Muslim woman working in finance, I sought knowledge and
							guidance from various sources to ensure my actions align with my
							values. I realised this process needs to be simpler. It should
							feel like having a conversation with someone who is genuinely
							ready to help you.”
						</p>
					</blockquote>
					<CarouselStages />
				</div>
			</div>
			{/* Section #4 */}
			<div className='min-h-screen w-full bg-offWhite flex flex-col items-center justify-center space-y-16 px-8'>
				<div className='text-center space-y-2'>
					<h2 className='text-3xl font-playfair font-bold'>How it works</h2>
					<p className='text-xl'>
						Bismillah, we will begin with a conversation, sister to sister
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3 justify-center'>
					<StepsCard steps={stepsList} />
				</div>
				<blockquote className='border-lilac border-l-8 pl-4 max-w-xl'>
					<p>
						“With every Nisa Invest financial guidance session, a mangrove tree
						is planted in our names. The tree planting operations provide
						crucial income to local communities. May Allah accept it from us and
						put barakah on our efforts, Ameen.”
					</p>
				</blockquote>
			</div>
			{/* Section #5 */}
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
