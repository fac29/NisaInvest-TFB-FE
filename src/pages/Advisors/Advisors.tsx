import AdvisorTabs from '@/components/AdvisorTabs/AdvisorTabs';
import StepsCard from '@/components/StepsCard/StepsCard';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { advisorsData } from '@/components/AdvisorTabs/advisorsData';
import { Step } from '@/components/StepsCard/StepsCard';
import {
	FaCalendarCheck,
	FaClipboardList,
	FaDesktop,
	FaSeedling,
} from 'react-icons/fa6';

const stepsList: Step[] = [
	{
		icon: FaCalendarCheck,
		number: 1,
		description: 'Book your free guidance session',
	},
	{
		icon: FaDesktop,
		number: 2,
		description: 'Visit your interactive dashboard',
	},
	{
		icon: FaClipboardList,
		number: 3,
		description: 'View your meeting notes',
	},
	{
		icon: FaSeedling,
		number: 4,
		description: 'Give sadaqah jariyah together',
	},
];

function Advisors() {
	return (
		<div className='container mx-auto pt-8 min-h-screen h-fit flex items-center justify-center'>
			<div className='w-full max-w-xl space-y-16 flex flex-col items-center'>
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
				<div className='text-center space-y-2'>
					<h2 className='text-3xl font-playfair font-bold'>How it works</h2>
					<p className='text-xl'>
						Bismillah, we will begin with a conversation, sister to sister
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3'>
					<StepsCard steps={stepsList} />
				</div>
			</div>
		</div>
	);
}

export default Advisors;
