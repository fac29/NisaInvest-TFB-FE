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

interface WidgetProps {
	category: 'savings' | 'expenses' | 'investing' | 'charity';
	isCoreTask: boolean;
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

function Widget({ category, isCoreTask }: WidgetProps) {
	return (
		<div className='group grid max-w-64 mx-auto my-4 items-center rounded-2xl border p-3 shadow-lg hover:bg-lilac hover:text-offWhite'>
			<div className='flex justify-between items-center'>
				<Badge variant='secondary'>
					{categoriesList.map((item) =>
						item.category == category ? <item.element /> : ''
					)}
				</Badge>
				{isCoreTask ? (
					<FaStar className='text-lilac group-hover:text-offWhite' />
				) : (
					''
				)}
			</div>
			<div className='py-2 text-center font-semibold'>
				I have at least 50% of one month's salary saved
			</div>
		</div>
	);
}

export default Widget;
