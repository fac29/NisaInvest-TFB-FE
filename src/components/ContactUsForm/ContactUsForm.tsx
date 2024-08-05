import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormDescription,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { Link } from 'react-router-dom';

const formSchema = z.object({
	first_name: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	}),
	last_name: z.string({
		required_error: 'Last name is required',
		invalid_type_error: 'Name must be a string',
	}),
	email: z.string().email(),
	social_media: z.string(),
	text_field: z.string(),
});

const refreshPage = () => {
	window.location.reload();
};

export function RequestDemoForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			social_media: '',
			text_field: '',
		},
	});

	const [state, handleFormspreeSubmit] = useFormspree('xdkngvor');
	if (state.succeeded) {
		return (
			<div className='flex flex-col space-y-4 items-center justify-center'>
				<p className='text-md'>Thank you for your enquiry!</p>
				<Button variant={'outline'} onClick={refreshPage}>
					Send new enquiry
				</Button>
			</div>
		);
	}

	// 2. Define a submit handler.
	const apiUrl = import.meta.env.VITE_API_URL;
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			handleFormspreeSubmit(values);

			const response = await fetch(`${apiUrl}contactnisa`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});
			if (!response.ok) {
				console.log(
					`There is a error sending the POST request ${response.status}`
				);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='first_name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your First Name</FormLabel>
							<FormControl>
								<Input type='text' placeholder='Fahan' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='last_name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Last Name</FormLabel>
							<FormControl>
								<Input type='text' placeholder='Ibrahim-Hashi' {...field} />
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
									placeholder='fahan@example.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='social_media'
					render={({ field }) => (
						<FormItem>
							<FormLabel>LinkedIn / Website / Social Media links</FormLabel>
							<FormDescription>
								Feel free to share your social media so we can get to know you
								better!
							</FormDescription>
							<FormControl>
								<Input
									type='text'
									placeholder='www.linkedin.com/company/nisainvest'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='text_field'
					render={({ field }) => (
						<FormItem>
							<FormLabel>How can we help?</FormLabel>
							<FormDescription>
								If you are writing on behalf of a company, please include the
								name of your company.
							</FormDescription>
							<FormControl>
								<Textarea
									placeholder='I would love to learn more about...'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-center'>
					<Button type='submit' variant={'outline'} disabled={state.submitting}>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	);
}
