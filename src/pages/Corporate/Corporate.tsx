import Carousel from '@/components/CarouselQuote/CarouselQuote';
import { Button } from '@/components/ui/button';
import { RequestDemoForm } from '@/components/ContactUsForm/ContactUsForm';
function Corporate() {
	return (
		<div className='container mx-auto flex items-center justify-center text-center pt-8'>
			<div className='w-full space-y-8 max-w-xl'>
				<h1 className='text-3xl font-bold font-playfair pb-8 text-lilac'>
					For Employers
				</h1>
				<h3 className='font-source-sans text-xl pb-8 '>
					Financial wellness is the dignity of knowing our hardwork throughout
					life helps us achieve our goals insh'Allah
				</h3>
				<div className='pb-8 flex justify-center'>
					<Button type='submit' variant={'outline'}>
						Book a Demo
					</Button>
				</div>

				<h2 className='text-3xl font-bold font-playfair pb-8 text-lilac'>
					How we support you
				</h2>
				<h3 className='font-source-sans pb-8'>
					Financial wellness begins at work, and we can support your employees.
				</h3>
				<ul className='grid grid-cols-2 gap-4 pb-8'>
					<li className='font-source-sans text-xl bg-burntOrange'>
						1:1 guidance
					</li>
					<li className='font-source-sans text-xl  bg-burntOrange'>
						Digital tools
					</li>
					<li className='font-source-sans text-xl  bg-burntOrange'>
						Tailored presentations
					</li>
					<li className='font-source-sans text-xl bg-burntOrange'>
						Content and media
					</li>
				</ul>
				{/*  this is optional will add later <Carousel {quotes = {...quotes}}/> */}
				<div className='text-left max-w-md mx-auto'>
					<RequestDemoForm />
				</div>

				<div className='pt-8'>
					<h3 className='text-3xl font-bold font-playfair pb-8 text-lilac'>
						Our feedback
					</h3>
					<h2 className='font-source-sans text-xl pb-8'>
						Here are some quotes from our most recent events
					</h2>
					<div className='grid grid-cols-2 pb-8'>
						<div>REVIEW CARD HERE</div>
						<div>REVIEW CARD HERE</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Corporate;
