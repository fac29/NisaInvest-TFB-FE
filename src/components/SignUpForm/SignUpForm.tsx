import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BE_BASE_URL } from '../../utils/dataTypes';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
	first_name: z
		.string()
		.min(2, { message: 'First name must be at least 2 characters long.' }),
	last_name: z
		.string()
		.min(2, { message: 'Last name must be at least 2 characters long.' }),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters long.',
	}),
});

const apiUrl = import.meta.env.VITE_API_URL;

export function SignUpForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			first_name: '',
			last_name: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log('Request Data:', values);
		try {
			const response = await fetch(`${apiUrl}users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				throw Error(`HTTP error ${response.status}`);
			}
			// Parse the response data if needed
			const data = await response.json();
			console.log('Success:', data);
		} catch (error) {
			console.error('Error DIANAAAAAA:', error);
		}
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit, (errors) =>
						console.log(errors)
					)}
					className='space-y-8'
				>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Your Email</FormLabel>
								<FormControl>
									<Input
										type='email'
										placeholder='Enter your email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Your Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='Enter your password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4'>
						<FormField
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											type='text'
											placeholder='Enter your first name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											type='text'
											placeholder='Enter your last name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='flex justify-center'>
						<Button type='submit' variant={'outline'}>
							Sign up
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
