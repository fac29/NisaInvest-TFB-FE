import {
	FaCloudRain,
	FaMoneyBill,
	FaHourglassHalf,
	FaSeedling,
	FaStar,
} from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import { IconType } from 'react-icons/lib';

interface ContainerProps {
	category: 'savings' | 'expenses' | 'investing' | 'charity';
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

function WidgetContainer({ category, children }: ContainerProps) {
	return (
		<div className='h-fill w-full lg:max-w-96 rounded-2xl flex flex-col items-start bg-offWhite'>
			<div className='max-w-64 lg:max-w-96 w-full mx-auto rounded-t-xl pt-3 text-offWhite font-bold mt-0'>
				<div className='flex justify-center gap-3'>
					<Badge variant='secondary' className='text-md'>
						{categoriesList.map((item) =>
							item.category == category ? <item.element /> : ''
						)}
					</Badge>
				</div>
			</div>
			<div className='px-1'>{children}</div>
		</div>
	);
}

export default WidgetContainer;
