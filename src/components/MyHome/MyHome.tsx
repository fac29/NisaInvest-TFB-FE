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
import {
	FaCalendar,
	FaClipboard,
	FaDesktop,
	FaSeedling,
} from 'react-icons/fa6';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

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

interface MyHomeCardProps {
	title: string;
	icon: IconType;
	description: string;
	value: string;
	buttonText: string;
}

interface MyHomeProps extends DashboardProps {
	tab: string;
	setTab: (tab: string) => void;
}

const homeCards: MyHomeCardProps[] = [
	{
		title: 'Interact with your dashboard',
		icon: FaDesktop,
		description:
			'Our interactive planning tool will help identify any areas for improvement and plan effectively inshallah',
		value: 'dashboard',
		buttonText: 'Go to my dashboard',
	},
	{
		title: 'View your notes',
		icon: FaClipboard,
		description:
			'You can access notes from your session here, ordered by priorities, as discussed with your planner',
		value: 'notes',
		buttonText: 'Go to my notes',
	},
	{
		title: "We're giving sadaqah jariyah",
		icon: FaSeedling,
		description:
			'With every guidance session we are planting a mangrove tree, may Allah accept it from all of us',
		value: 'charity',
		buttonText: 'Learn more',
	},
];

export default function MyHome({ userId, tab, setTab }: MyHomeProps) {
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
			<h2 className='font-playfair text-2xl font-semibold'>Getting Started</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
				{/* UserProfile card */}
				<Card>
					<CardHeader className='grid grid-cols-2'>
						<div className='size-24 md:size-36 bg-lilac rounded-full'></div>
						{/* <img className='rounded-full size-36' /> */}
						<div className='flex flex-col space-y-8 items-center justify-center'>
							<CardTitle>{userData.first_name}</CardTitle>
							<Button onClick={() => setTab('profile')} variant={'outline'}>
								View Profile
							</Button>
							{/* <Link to='/' className={buttonVariants({ variant: 'outline' })}>
						View Profile
					</Link> */}
						</div>
					</CardHeader>
				</Card>

				{/* Carousel Quote */}
				<CarouselQuote quotes={quotes} />

				{/* Advisor Card */}
				<Card>
					<CardHeader className='flex-row gap-4'>
						<Badge className='size-8 items-center justify-center text-lg'>
							<FaCalendar />
						</Badge>
						<CardTitle>Book your free guidance session</CardTitle>
					</CardHeader>
					<CardContent className='grid grid-cols-2'>
						<img src={fahanImage} className='rounded-full size-24 sm:size-36' />
						<div>
							<h3 className='text-xl font-bold'>Fahan Ibrahim-Hashi</h3>
							<h4 className='text-md font-semibold'>
								Financial Planner
								<SocialIcon
									url='https://www.linkedin.com/company/nisainvest/'
									target='blank'
									className='hover:opacity-80 ml-2'
									style={{ height: 24, width: 24 }}
								></SocialIcon>
							</h4>
						</div>
					</CardContent>
					<CardFooter className=''>
						<Link
							to='/booking'
							className={buttonVariants({ variant: 'outline' })}
						>
							Confirm my session
						</Link>
					</CardFooter>
				</Card>

				{/* Home Cards displaying all of the steps individuals can take */}
				{homeCards.map((card) => (
					<Card>
						<CardHeader className='flex-row gap-4'>
							<Badge className='size-8 items-center justify-center text-lg'>
								<card.icon />
							</Badge>
							<CardTitle>{card.title}</CardTitle>
						</CardHeader>
						<CardContent>{card.description}</CardContent>
						<CardFooter>
							<Button onClick={() => setTab(card.value)} variant={'outline'}>
								{card.buttonText}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}