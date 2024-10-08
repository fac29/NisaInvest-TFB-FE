import {
	FaCloudRain,
	FaMoneyBill,
	FaHourglassHalf,
	FaSeedling,
	FaStar,
	FaEllipsis,
} from 'react-icons/fa6';
import { SquareCheckBig, Goal } from 'lucide-react';
import { IconType } from 'react-icons/lib';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const baseUrl = import.meta.env.VITE_BASE_URL;

interface WidgetProps {
	category: 'savings' | 'expenses' | 'investing' | 'charity';
	description: string;
	isCoreTask: boolean;
	goalId: number;
	userId: number;
	status: 'completed' | 'focused' | 'not_done' | null;
	updateGoalStatus: (
		goalId: number,
		newStatus: 'completed' | 'focused' | 'not_done' | null
	) => void;
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
		'group grid w-full max-w-64 lg:max-w-96 mx-auto my-4 items-center rounded-2xl border-2 border-lilac bg-offWhite text-primaryBlack p-3 shadow-lg',
	completed:
		'group grid w-full max-w-64 lg:max-w-96 mx-auto my-4 items-center rounded-2xl border-2 border-lilac bg-grey text-primaryBlack p-3 shadow-lg',
	focused:
		'group grid w-full max-w-64 lg:max-w-96 mx-auto my-4 items-center rounded-2xl border-2 border-burntOrange bg-offWhite text-primaryBlack p-3 shadow-lg',
	selected:
		'group grid w-full max-w-64 lg:max-w-96 mx-auto my-4 items-center rounded-2xl border-2 border-grey bg-grey text-primaryBlack p-3 shadow-lg',
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
	status,
	updateGoalStatus,
}: WidgetProps) {
	// const [style, setStyle] = useState(styles.default); // This is used for handleClick function
	const [starStyle, setStarStyle] = useState(starStyles.default);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// This function is not used
	// const handleClick = (event: React.MouseEvent<HTMLElement>) => {
	// 	event.preventDefault();
	// 	style == styles.default
	// 		? setStyle(styles.selected)
	// 		: setStyle(styles.default);
	// 	starStyle == starStyles.default
	// 		? setStarStyle(starStyles.selected)
	// 		: setStarStyle(starStyles.default);
	// };

	const handleDropdownToggle = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const handleSetFocus = async () => {
		try {
			const response = await fetch(
				`${baseUrl}/goals/user-goal/focus/${userId}/${goalId}`,
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
			updateGoalStatus(goalId, 'focused');
		} catch (error) {
			console.error('Error setting goal to focus', error);
		}
	};

	const handleSetComplete = async () => {
		try {
			const response = await fetch(
				`${baseUrl}/goals/user-goal/complete/${userId}/${goalId}`,
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
			updateGoalStatus(goalId, 'completed');
		} catch (error) {
			console.error('Error setting goal to complete', error);
		}
	};

	const currentStyle =
		status === 'completed'
			? styles.completed
			: status === 'focused'
				? styles.focused
				: styles.default;

	return (
		<div>
			<div className={isDropdownOpen ? styles.selected : currentStyle}>
				<div className='relative flex justify-between items-center'>
					<Badge variant='secondary'>
						{categoriesList.map((item) =>
							item.category === category ? (
								<item.element key={item.category} />
							) : null
						)}
					</Badge>
					<DropdownMenu
						open={isDropdownOpen}
						onOpenChange={handleDropdownToggle}
					>
						<DropdownMenuTrigger
							className={
								isDropdownOpen
									? 'p-2 scale-125 text-burntOrange'
									: 'p-2 hover:scale-125 hover:text-burntOrange'
							}
						>
							<FaEllipsis />
						</DropdownMenuTrigger>
						<DropdownMenuContent className='bg-offWhite w-40'>
							<DropdownMenuLabel>Mark goal as</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem
									onClick={handleSetComplete}
									disabled={status === 'completed'}
								>
									<SquareCheckBig className='mr-2 h-5 w-5' />
									<span>Complete</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={handleSetFocus}
									disabled={status === 'focused'}
								>
									<Goal className='mr-2 h-5 w-5' />
									<span>Focused</span>
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