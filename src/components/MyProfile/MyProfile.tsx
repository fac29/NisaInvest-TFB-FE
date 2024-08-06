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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

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
					<DialogEditProfile
						userData={userData}
						userId={userId}
					></DialogEditProfile>
				</div>
			</CardContent>
		</Card>
	);
}

interface DialogEditProfileProps {
	userData: UserObject;
	userId: number;
}

export function DialogEditProfile({
	userData,
	userId,
}: DialogEditProfileProps) {
	const [firstName, setFirstName] = useState(userData.first_name);
	const [lastName, setLastName] = useState(userData.last_name);
	const [email, setEmail] = useState(userData.email);
	const [isSaving, setIsSaving] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

		const handleSave = async () => {
			setIsSaving(true);
			try {
				const response = await fetch(`${baseUrl}/users/${userId}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						first_name: firstName,
						last_name: lastName,
						email: email,
					}),
				});

				if (!response.ok) {
					throw new Error('Failed to update profile');
				}

				alert('Profile updated successfully');
				setIsOpen(false);
			} catch (error) {
				let errorMessage = 'An unexpected error occurred';
				if (error instanceof Error) {
					errorMessage = error.message;
				}
				alert(errorMessage);
			} finally {
				setIsSaving(false);
			}
		};

		return (
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button variant='outline'>Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you're done.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='first_name' className='text-right'>
								First Name
							</Label>
							<Input
								id='first_name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='last_name' className='text-right'>
								Last Name
							</Label>
							<Input
								id='last_name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='email' className='text-right'>
								Email
							</Label>
							<Input
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='col-span-3'
							/>
						</div>
					</div>
					<DialogFooter>
						<Button onClick={handleSave} disabled={isSaving}>
							{isSaving ? 'Saving...' : 'Save changes'}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
}
