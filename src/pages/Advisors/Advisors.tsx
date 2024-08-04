import { ProfileCard } from '@/components/ProfileCard/ProfileCard';

function Advisors() {
	return (
		<>
			<div className='min-h-screen h-fit flex flex-col items-center justify-around'>
				<ProfileCard
					name='Fahan Ibrahim-Hashi'
					position='Financial Advisor'
					imageUrl='./fahan.jpeg'
					bioPage='fahan'
				></ProfileCard>
			</div>
		</>
	);
}

export default Advisors;
