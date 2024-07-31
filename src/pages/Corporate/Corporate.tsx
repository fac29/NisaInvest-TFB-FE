import Carousel from '@/components/CarouselQuote/CarouselQuote';
import { Button } from '@/components/ui/button';
import { RequestDemoForm } from '@/components/RequestDemoForm/RequestDemoForm';
function Corporate() {
	return (
		<div className='container mx-auto flex items-center justify-center max-w-6xl text-center'>
			<div className='px-8 w-full pt-8 '>
				<h1 className='text-3xl font-bold font-playfair pb-8 text-lilac'>For Employers</h1>
				<h3 className='font-source-sans text-xl pb-8 '>
					Financial wellness is the dignity of knowing our hardwork throughout
					life helps us achieve our goals insh'Allah
				</h3>
				<div className='pb-8 flex justify-center'>
					<Button type='submit' variant={'outline'}>
						Book a Demo
					</Button>
				</div>


				<h2 className='text-3xl font-bold font-playfair pb-8 text-lilac'> How we support you</h2>
				<h3 className='font-source-sans pb-8'>
					Financial wellness begins at work, and we can support your employees.
				</h3>
				<ul className='grid grid-cols-2 gap-4 pb-8'>
					<li className='font-source-sans text-xl bg-burntOrange'> 1:1 guidance</li>
					<li className='font-source-sans text-xl  bg-burntOrange'> digital tools</li>
					<li className='font-source-sans text-xl  bg-burntOrange'> tailored presentations</li>
					<li className='font-source-sans text-xl bg-burntOrange'> content and media</li>
				</ul>
				{/* <Carousel {quotes = {...quotes}}/> */}
				<div className='px-28'>
					<RequestDemoForm />
				</div>

				<div>
					<h3 className='text-3xl font-bold font-playfair pb-8 text-lilac'>Our feedback</h3>
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
