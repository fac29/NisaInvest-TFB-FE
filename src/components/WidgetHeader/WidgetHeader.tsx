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

function WidgetHeader({ category, heading }: HeaderProps) {
	return (
		<div className='group grid max-w-64 mx-auto my-4 items-center rounded-2xl border p-3 shadow-lg hover:bg-lilac hover:text-offWhite'>
			<div className='flex items-center'>
				<Badge variant='secondary'>
					{categoriesList.map((item) =>
						item.category == category ? <item.element /> : ''
					)}
				</Badge>
				<h2>{heading}</h2>
			</div>
		</div>
	);
}

export default WidgetHeader;
