import {
	FaCloudRain,
	FaMoneyBill,
	FaHourglassHalf,
	FaSeedling,
	FaStar,
} from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import { IconType } from 'react-icons/lib';
import { string } from 'zod';

interface HeaderProps {
	category: 'savings' | 'expenses' | 'investing' | 'charity';
	heading:
		| 'Emergency Savings'
		| 'Managing Expenses'
		| 'Investing in the Future'
		| 'Giving Back';
	children?: React.ReactNode;
}

interface Category {
	category: string;
	element: IconType;
}

const categoriesList: Category[] = [
	{
		category: 'savings',
		element: FaCloudRain,
	},
	{
		category: 'expenses',
		element: FaMoneyBill,
	},
	{
		category: 'investing',
		element: FaHourglassHalf,
	},
	{
		category: 'charity',
		element: FaSeedling,
	},
];

function WidgetHeader({ category, heading, children }: HeaderProps) {
	return (
		<div className='h-fit w-full lg:max-w-96 rounded-2xl grid items-start bg-offWhite'>
			<div className='max-w-64 lg:max-w-96 w-full mx-auto rounded-t-xl p-3 shadow-lg bg-lilac text-offWhite font-bold mt-0'>
				<div className='flex justify-center gap-3'>
					<Badge variant='secondary' className='text-md'>
						{categoriesList.map((item) =>
							item.category == category ? <item.element /> : ''
						)}
					</Badge>
					<h2>{heading}</h2>
				</div>
			</div>
			<div className='px-1'>{children}</div>
		</div>
	);
}

export default WidgetHeader;
