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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

/** */
const Reasons = [
	{
		id: 'savings',
		name: 'savings',
		description: 'Grow my savings',
	},
	{
		id: 'expenses',
		name: 'expenses',
		description: 'Learn how to manage my expenses',
	},
	{
		id: 'investments',
		name: 'investments',
		description: 'Learn about investments',
	},
	{
		id: 'community',
		name: 'community',
		description: 'Learn how to give back to my community',
	},
];

// const defaultReason: string = Reasons[0]!.name!;

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
	reason: z.enum(['savings', 'expenses', 'investments', 'community']),
});

// I wanted reason to have the default value `defaultReason` but this caused a type error, so I've
// hard-coded for now. Something to come back to if we have time!
export function SignUpForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			reason: 'savings',
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
						<FormField
							control={form.control}
							name='reason'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										What do you hope to get out of Nisa Invest?
									</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											{Reasons.map((reason) => (
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem
															value={reason.name}
															id={reason.id}
														/>
													</FormControl>
													<FormLabel className='font-normal'>
														{reason.description}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
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
