import CarouselQuote from '../CarouselQuote/CarouselQuote';
import { quotes } from '@/components/CarouselQuote/data';
import { DashboardProps } from '../Dashboard/Dashboard';
import useFetch from '@/utils/fetchData';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
	Card,
	CardContent,
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
import { UserObject } from '../MyProfile/MyProfile';

const baseUrl = import.meta.env.VITE_BASE_URL;

interface MyHomeCardProps {
	title: string;
	icon: IconType;
	description: string;
	value: string;
	buttonText: string;
}

interface MyHomeProps extends DashboardProps {
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

export default function MyHome({ userId, setTab }: MyHomeProps) {
	const { data, isLoading, error } = useFetch<UserObject>(
		`${baseUrl}/users/id/${userId}`
	);

	const [userData, setUserData] = useState<UserObject | null>(null);

	useEffect(() => {
		if (data && !Array.isArray(data)) {
			setUserData(data);
		}
	}, [data]);

	if (isLoading) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<Loader2 className='w-12 h-12 animate-spin text-lilac' />
			</div>
		);
	}

	if (error) {
		console.log(error);
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<p className='text-destructive font-semibold'>
					Error loading dashboard data. Please try again later.
				</p>
			</div>
		);
	}

	if (!userData) {
		return <div className='p-4'>No user data available.</div>;
	}

	const first_name = userData.first_name;

	return (
		<div className='container min-h-screen p-4 space-y-8 max-w-3xl'>
			<h1 className='font-playfair italic text-3xl font-semibold text-center'>
				Salaam {first_name}, welcome to Nisa Invest!
			</h1>
			<h2 className='font-playfair text-2xl font-semibold'>Getting Started</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
				{/* UserProfile card */}
				<Card>
					<CardHeader className='grid grid-cols-2'>
						<div className='size-24 md:size-36 bg-lilac rounded-full'></div>
						{/* <img className='rounded-full size-36' /> */}
						<div className='flex flex-col space-y-8 items-center justify-center'>
							<CardTitle>{first_name}</CardTitle>
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
							<Link
								to='/booking'
								className={cn(buttonVariants({ variant: 'outline' }), 'mt-6')}
							>
								Confirm my session
							</Link>
						</div>
					</CardContent>
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
