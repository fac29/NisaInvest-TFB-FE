import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
	firstName: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	}),
	lastName: z.string({
		required_error: 'Last name is required',
		invalid_type_error: 'Name must be a string',
	}),
	email: z.string().email(),
	companyName: z.string(),
	socialMediaLink: z.string(),
	furtherInfo: z.string(),
});

export function RequestDemoForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			companyName: '',
			socialMediaLink: '',
			furtherInfo: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your First Name</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='How should we call you? :)'
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
							<FormLabel>Your Last Name</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='Please enter your last name'
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
									placeholder='Enter your email so we can get in contact with you'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='socialMediaLink'
					render={({ field }) => (
						<FormItem>
							<FormLabel>LinkedIn / Website / Social Media links</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='Feel free to share your social media so we can get to know you more!'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='furtherInfo'
					render={({ field }) => (
						<FormItem>
							<FormLabel>How can Nisa Invest Help?</FormLabel>
							<FormControl>
								<Textarea
									placeholder='This is where you can tell us how we can help or any info you want to get!'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-center'>
					<Button type='submit' variant={'outline'}>
						submit
					</Button>
				</div>
			</form>
		</Form>
	);
}
