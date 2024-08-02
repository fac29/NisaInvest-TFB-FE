import FAQsAccordion from '@/components/FAQsAccordion/FAQsAccordion';

function FAQs() {
	return (
		<div className='container mx-auto min-h-screen flex items-center justify-center'>
			<div className='w-full max-w-md space-y-8'>
				<h1 className='font-playfair text-center text-3xl font-bold'>
					Frequently Asked Questions
				</h1>
				<FAQsAccordion />
			</div>
		</div>
	);
}

export default FAQs;
