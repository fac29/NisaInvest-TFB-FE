import {
	FaCloudRain,
	FaMoneyBill,
	FaHourglassHalf,
	FaSeedling,
	FaStar,
	FaEllipsis,
} from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import { IconType } from 'react-icons/lib';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SquareCheckBig, Goal, StickyNote } from 'lucide-react';

interface WidgetProps {
	category: 'savings' | 'expenses' | 'investing' | 'charity';
	description: string;
	isCoreTask: boolean;
	userId: number;
	goalId: number;
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

const styles = {
	default:
		'group grid w-full max-w-64 lg:max-w-96 mx-auto my-4 items-center rounded-2xl border-2 border-lilac bg-offWhite text-primaryBlack p-3 shadow-lg hover:bg-lilac hover:text-offWhite hover:cursor-pointer',
	selected:
		'group grid w-full max-w-64 lg:max-w-96 mx-auto my-4 items-center rounded-2xl border-2 border-grey bg-grey text-primaryBlack p-3 shadow-lg hover:bg-lilac hover:text-offWhite hover:cursor-pointer',
};

const starStyles = {
	default: 'text-lilac group-hover:text-offWhite',
	selected: 'text-primaryBlack group-hover:text-offWhite',
};

function Widget({
	category,
	description,
	isCoreTask,
	userId,
	goalId,
}: WidgetProps) {
	const [style, setStyle] = useState(styles.default);
	const [starStyle, setStarStyle] = useState(starStyles.default);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		style == styles.default
			? setStyle(styles.selected)
			: setStyle(styles.default);
		starStyle == starStyles.default
			? setStarStyle(starStyles.selected)
			: setStarStyle(starStyles.default);
	};

	const handleSetFocus = async () => {
		try {
			console.log('Trying to set to focused');
			const response = await fetch(
				`https://nisa-invest-tfb-be.vercel.app/goals/user-goal/focus/${userId}/${goalId}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Failed to set goal to focus');
			}
			console.log('Goal set to focus');
		} catch (error) {
			console.error('Error setting goal to focus', error);
		}
	};

	const handleSetComplete = async () => {
		console.log('Trying to set to completed');
		try {
			const response = await fetch(
				`https://nisa-invest-tfb-be.vercel.app/goals/user-goal/complete/${userId}/${goalId}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Failed to set goal to complete');
			}
			console.log('Goal set to complete');
		} catch (error) {
			console.error('Error setting goal to complete', error);
		}
	};

	return (
		<div>
			<div className={style} onClick={handleClick}>
				<div className='relative flex justify-between items-center'>
					<Badge variant='secondary'>
						{categoriesList.map((item) =>
							item.category === category ? (
								<item.element key={item.category} />
							) : null
						)}
					</Badge>
					<DropdownMenu>
						<DropdownMenuTrigger className='p-2 hover:scale-125'>
							<FaEllipsis />
						</DropdownMenuTrigger>
						<DropdownMenuContent className='bg-offWhite w-40'>
							<DropdownMenuLabel>Mark goal as</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem onClick={handleSetComplete}>
									<SquareCheckBig className='mr-2 h-5 w-5' />
									<span>Complete</span>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={handleSetFocus}>
									<Goal className='mr-2 h-5 w-5' />
									<span>Focused</span>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => console.log('To-do')}>
									<StickyNote className='mr-2 h-5 w-5' />
									<span>To-do</span>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
					{isCoreTask ? <FaStar className={starStyle} /> : null}
				</div>
				<div className='py-2 text-center font-semibold'>{description}</div>
			</div>
		</div>
	);
}

export default Widget;