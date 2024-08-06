import { Loader2 } from 'lucide-react';
import { Separator } from '../ui/separator';
import useFetch from '@/utils/fetchData';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

interface MyProfileProps {
	userId: number; //change to number once correct endpoint set up
}

interface UserObject {
	id: number;
	created_at: string;
	email: string;
	first_name: string;
	last_name: string;
	password: string;
}

const baseUrl = import.meta.env.VITE_BASE_URL;

export function MyProfile({ userId }: MyProfileProps) {
	const { data, isLoading, error } = useFetch<UserObject>(
		`${baseUrl}/users/id/${userId}`
	);

	const userData = data as UserObject;

	if (isLoading) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<Loader2 className='w-12 h-12 animate-spin text-lilac' />
			</div>
		);
	}

	if (error) {
		return (
			<div className='p-4 text-red-500'>
				Error loading profile. Please try again later.
			</div>
		);
	}

	if (!data) {
		return <div className='p-4'>No profile data available.</div>;
	}

	const userFirstName = userData.first_name;
	const userLastName = userData.last_name;
	const userEmail = userData.email;

	return (
		<Card className='w-fit lg:min-w-[500px] mt-8'>
			<CardHeader className='border-b-2'>
				<CardTitle>
					<h2 className='text-center text-3xl font-bold font-playfair'>
						My Profile
					</h2>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid gap-4 pt-2 font-source-sans'>
					<div className='flex justify-between'>
						<p className='font-semibold'>First Name:</p>
						<p>{userFirstName}</p>
					</div>
					<Separator />
					<div className='flex justify-between'>
						<p className='font-semibold'>Last Name:</p>
						<p>{userLastName}</p>
					</div>
					<Separator />
					<div className='flex justify-between'>
						<p className='font-semibold'>Email:</p>
						<p>{userEmail}</p>
					</div>
				</div>
				<div className='text-center mt-8'>
					<Button variant={'outline'}>Edit your details</Button>
				</div>
			</CardContent>
		</Card>
	);
}
