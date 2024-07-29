import { Calendly } from '@/components/Calendly/Calendly';

function Booking() {
	return (
		<>
			<div className='flex items-center justify-center min-h-screen p-4'>
				<div className='w-full max-w-4xl h-full'>
					<Calendly />
				</div>
			</div>
		</>
	);
}

export default Booking;
