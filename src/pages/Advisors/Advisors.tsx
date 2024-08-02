import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { Button } from '@/components/ui/button';

function Advisors() {
	return (
		<div className='container pt-28 mx-auto min-h-screen h-fit flex items-center justify-center'>
			<div className='w-full max-w-md space-y-8'>
				<div className='text-center space-y-4'>
					<h1 className='font-playfair text-2xl font-bold'>
						Meet the Nisa Invest Planners
					</h1>
					<h2>One-to-one financial guidance to support you at every stage</h2>
					<Button variant={'outline'}>Book your session</Button>
				</div>
				<div className='flex flex-col items-center justify-around'>
					<ProfileCard
						name='Fahan Ibrahim-Hashi'
						position='Financial Advisor'
						imageUrl='./Fahan_Ibrahim-Hashi.jpeg'
						bioPage='fahan'
					></ProfileCard>
				</div>
			</div>
		</div>
	);
}

export default Advisors;
