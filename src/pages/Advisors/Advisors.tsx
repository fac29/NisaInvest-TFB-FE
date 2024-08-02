import AdvisorTabs from '@/components/AdvisorTabs/AdvisorTabs';
import StepsCard from '@/components/StepsCard/StepsCard';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { advisorsData } from '@/components/AdvisorTabs/advisorsData';

function Advisors() {
	return (
		<div className='container pt-28 mx-auto my-4 min-h-screen h-fit flex items-center justify-center'>
			<div className='w-full max-w-xl space-y-8 flex flex-col items-center'>
				<div className='text-center space-y-4'>
					<h1 className='font-playfair text-3xl font-bold'>
						Meet the Nisa Invest Planners
					</h1>
					<p className='text-xl'>
						One-to-one financial guidance to support you at every stage
					</p>
					<Link
						to='/booking'
						className={buttonVariants({ variant: 'outline' })}
					>
						Book your session
					</Link>
				</div>
				<AdvisorTabs advisors={advisorsData} />
				<div>
					<h2 className='text-2xl font-playfair'>How it works</h2>
					<p>Bismillah, we will begin with a conversation, sister to sister</p>
				</div>
				<div>
					<StepsCard />
				</div>
			</div>
		</div>
	);
}

export default Advisors;
