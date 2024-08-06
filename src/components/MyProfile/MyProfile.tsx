import { Loader2 } from 'lucide-react';
import { Separator } from '../ui/separator';
import useFetch from '@/utils/fetchData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { useState, useEffect } from 'react';

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

	const [userData, setUserData] = useState<UserObject | null>(null);
	const [message, setMessage] = useState<string | null>(null);

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
		return (
			<div className='p-4 text-red-500'>
				Error loading profile. Please try again later.
			</div>
		);
	}

	if (!userData) {
		return <div className='p-4'>No profile data available.</div>;
	}

	const userFirstName = userData.first_name;
	const userLastName = userData.last_name;
	const userEmail = userData.email;

	const handleUpdateUserData = (updatedData: UserObject) => {
		setUserData(updatedData);
		setMessage('Profile updated successfully');
		setTimeout(() => setMessage(null), 2000);
	};

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
						onUpdateUserData={handleUpdateUserData}
					></DialogEditProfile>
				</div>
				{message && (
					<div className='text-center mt-4 text-green-500'>{message}</div>
				)}
			</CardContent>
		</Card>
	);
}

interface DialogEditProfileProps {
	userData: UserObject;
	userId: number;
	onUpdateUserData: (updatedData: UserObject) => void;
}

export function DialogEditProfile({
	userData,
	userId,
	onUpdateUserData,
}: DialogEditProfileProps) {
	const [firstName, setFirstName] = useState(userData.first_name);
	const [lastName, setLastName] = useState(userData.last_name);
	const [email, setEmail] = useState(userData.email);
	const [isSaving, setIsSaving] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const [initialFirstName, setInitialFirstName] = useState(userData.first_name);
	const [initialLastName, setInitialLastName] = useState(userData.last_name);
	const [initialEmail, setInitialEmail] = useState(userData.email);

	useEffect(() => {
		if (isOpen) {
			setInitialFirstName(userData.first_name);
			setInitialLastName(userData.last_name);
			setInitialEmail(userData.email);
		}
	}, [isOpen, userData]);

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

			const updatedUser = await response.json();

			setIsOpen(false);
			onUpdateUserData(updatedUser);
		} catch (error) {
			let errorMessage = 'An unexpected error occurred';
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			setErrorMessage(errorMessage);
			setTimeout(() => setErrorMessage(null), 2000);
		} finally {
			setIsSaving(false);
		}
	};

	const isChanged =
		firstName !== initialFirstName ||
		lastName !== initialLastName ||
		email !== initialEmail;

	const handleClose = () => {
		setIsOpen(false);
		// Reset to initial values when closing
		setFirstName(initialFirstName);
		setLastName(initialLastName);
		setEmail(initialEmail);
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) {
					handleClose();
				} else {
					setInitialFirstName(userData.first_name);
					setInitialLastName(userData.last_name);
					setInitialEmail(userData.email);
				}
				setIsOpen(open);
			}}
		>
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
					<Button onClick={handleSave} disabled={isSaving || !isChanged}>
						{isSaving ? 'Saving...' : 'Save changes'}
					</Button>
				</DialogFooter>
				{errorMessage && (
					<div className='text-center mt-4 text-red-500'>{errorMessage}</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
