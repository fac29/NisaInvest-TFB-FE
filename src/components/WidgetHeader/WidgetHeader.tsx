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
		<div>
			<div className='max-w-64 mx-auto my-4 rounded-2xl border p-3 shadow-lg bg-lilac text-offWhite font-bold'>
				<div className='flex justify-around'>
					<Badge variant='secondary'>
						{categoriesList.map((item) =>
							item.category == category ? <item.element /> : ''
						)}
					</Badge>
					<h2>{heading}</h2>
				</div>
			</div>
			<div className='max-w-64 mx-auto my-4 rounded-2xl border p-3 shadow-lg bg-lilac text-offWhite font-bold'>
				<div className='flex justify-around'>
					<Badge className='text-sm'>
						{categoriesList.map((item) =>
							item.category == category ? <item.element /> : ''
						)}
					</Badge>
					<h2>{heading}</h2>
				</div>
			</div>
		</div>
	);
}

export default WidgetHeader;
