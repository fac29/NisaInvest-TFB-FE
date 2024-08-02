import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters long.',
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
	firstName: z
		.string()
		.min(2, { message: 'First name must be at least 2 characters long.' }),
	lastName: z
		.string()
		.min(2, { message: 'Last name must be at least 2 characters long.' }),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters long.',
	}),
});

export function SignUpForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			firstName: '',
			lastName: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your Username</FormLabel>
									<FormControl>
										<Input
											type='text'
											placeholder='Create a username'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
