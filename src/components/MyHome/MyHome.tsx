import CarouselQuote from '../CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { DashboardProps } from '../Dashboard/Dashboard';
import useFetch from '@/utils/fetchData';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '../ui/button';
import { SocialIcon } from 'react-social-icons';
import fahanImage from '/fahan_square.jpg';
import { IconType } from 'react-icons/lib';
import { FaClipboard, FaDesktop, FaSeedling } from 'react-icons/fa6';
import { Badge } from '../ui/badge';

const baseUrl = import.meta.env.VITE_BASE_URL;

interface UserData {
	id: number;
	created_at: string;
	email: string;
	first_name: string;
	last_name: string;
	auth_id: string | null;
	password: string;
}

interface UserProfileProps {
	user: UserData;
}

interface DashboardHomeCardProps {
	title: string;
	icon: IconType;
	description: string;
	path: string;
	buttonText: string;
}

const dashboardCards = [
	{
		title: 'Interact with your dashboard',
		icon: FaDesktop,
		description:
			'Our interactive planning tool will help identify any areas for improvement and plan effectively inshallah',
		path: '/dashboard',
		buttonText: 'Go to my dashboard',
	},
	{
		title: 'View your notes',
		icon: FaClipboard,
		description:
			'You can access notes from your session here, ordered by priorities, as discussed with your planner',
		path: '/notes',
		buttonText: 'Go to my notes',
	},
	{
		title: "We're giving sadaqah jariyah",
		icon: FaSeedling,
		description:
			'With every guidance session we are planting a mangrove tree, may Allah accept it from all of us',
		path: '/charity',
		buttonText: 'Learn more',
	},
];

function UserProfileCard({ user }: UserProfileProps) {
	return (
		<Card>
			<CardHeader className='grid grid-cols-2'>
				<div className='size-36 bg-lilac rounded-full'></div>
				{/* <img className='rounded-full size-36' /> */}
				<div className='flex flex-col space-y-8 items-center justify-center'>
					<CardTitle>{user.first_name}</CardTitle>
					<Link to='/' className={buttonVariants({ variant: 'outline' })}>
						View Profile
					</Link>
				</div>
			</CardHeader>
		</Card>
	);
}

function DashboardAdvisorCard({}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Book your free guidance session</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent className='grid grid-cols-2'>
				<img src={fahanImage} className='rounded-full h-36 w-36' />
				<div>
					<h3 className='text-xl font-bold'>Fahan Ibrahim-Hashi</h3>
					<h4 className='text-lg font-semibold'>Financial Planner</h4>
					<p className='flex items-center'>
						<SocialIcon
							url='https://www.linkedin.com/company/nisainvest/'
							target='blank'
							className='hover:opacity-80 ml-2'
							style={{ height: 25, width: 25 }}
						></SocialIcon>
					</p>
					<Link
						to='/booking'
						className={buttonVariants({ variant: 'outline' })}
					>
						Confirm my session
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}

function DashboardHomeCard({
	title,
	icon,
	description,
	path,
	buttonText,
}: DashboardHomeCardProps) {
	const Icon = icon;
	return (
		<Card>
			<CardHeader className='flex-row gap-4 align-middle'>
				<Badge className='size-8 items-center justify-center text-lg'>
					<Icon />
				</Badge>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>{description}</CardContent>
			<CardFooter>
				<Button variant={'outline'}>{buttonText}</Button>
			</CardFooter>
		</Card>
	);
}

export default function DashboardHome({ userId }: DashboardProps) {
	const [isLoading, setIsLoading] = useState(true);
	const fetchUser = useFetch<UserData>(`${baseUrl}/users/id/${userId}`);
	const userData = fetchUser.data as UserData;

	useEffect(() => {
		if (fetchUser.data || fetchUser.error) {
			setIsLoading(false);
		}
	}, [userData, fetchUser.error]);

	if (isLoading) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<Loader2 className='w-12 h-12 animate-spin text-lilac' />
			</div>
		);
	}

	if (fetchUser.error) {
		console.log(fetchUser.error);
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<p className='text-destructive font-semibold'>
					Error loading dashboard data. Please try again later.
				</p>
			</div>
		);
	}

	return (
		<div className='container min-h-screen p-4 space-y-8 max-w-3xl'>
			<h1 className='font-playfair italic text-3xl font-semibold text-center'>
				Salaam {userData.first_name}, welcome to Nisa Invest!
			</h1>
			<div className='flex justify-center'>
				<CarouselQuote quotes={quotes} />
			</div>
			<h2 className='font-playfair text-2xl font-semibold'>Getting Started</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
				<UserProfileCard user={userData} />
				<div></div>
				<DashboardAdvisorCard />
				{dashboardCards.map((card) => (
					<DashboardHomeCard {...card} />
				))}
			</div>
		</div>
	);
}
