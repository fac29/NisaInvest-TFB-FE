import { RequestDemoForm } from '@/components/ContactUsForm/ContactUsForm';

function ContactUs() {
	return (
		<div className='container mx-auto min-h-screen flex items-center justify-center'>
			<div className='w-full max-w-md space-y-8'>
				<h1 className='font-playfair text-center text-3xl font-bold'>
					Contact Us
				</h1>
				<RequestDemoForm />
			</div>
		</div>
	);
}

export default ContactUs;
