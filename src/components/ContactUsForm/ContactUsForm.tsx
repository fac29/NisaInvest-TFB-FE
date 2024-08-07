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
import { Dialog } from '../Dialog/Dialog';
import { useState } from 'react';

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

export function RequestDemoForm() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'onBlur',
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			social_media: '',
			text_field: '',
		},
	});

	// 2. Define a submit handler.
	const baseUrl = import.meta.env.VITE_BASE_URL;
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await fetch(`${baseUrl}/contactnisa`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});
			if (response.ok) {
				console.log(`successful form submission ${response.body}`);
				setIsDialogOpen(true);
				form.reset();
			} else {
				console.log(`error in submittting the form ${response.status}`);
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
					name='last_name'
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
					name='social_media'
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
					name='text_field'
					render={({ field }) => (
						<FormItem>
							<FormLabel>What company do you come from?</FormLabel>
							<FormControl>
								<Textarea
									placeholder='This is where you can tell us what company you are contacting us from
									and how we can help!'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-center'>
					<Button type='submit' variant={'outline'}>
						click here
					</Button>
					<Dialog
						open={isDialogOpen}
						//the value of open is linked to onOpenChange. When a button on the dialog is pressed, open switches to false.
						onOpenChange={setIsDialogOpen}
						title='Form Submitted'
						text='Your form was successfully submitted. Thank you!'
					/>
				</div>
			</form>
		</Form>
	);
}
