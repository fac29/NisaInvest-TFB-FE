import { RequestDemoForm } from '@/components/RequestDemoForm/RequestDemoForm';

function ContactUs() {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center w-full'>
			<div className='w-1/3'>
				<RequestDemoForm></RequestDemoForm>
			</div>
		</div>
	);
}

export default ContactUs;
