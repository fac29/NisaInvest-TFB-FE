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
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
lastName: z.string({
    required_error: "Last name is required",
    invalid_type_error: "Name must be a string",
  }),
email: z.string().email(),
companyName: z.string(),
socialMediaLink: z.string(),
futherInfo: z.string(),
});

export function RequestDemoForm() {
	// 1. Define your form.
const form = useForm();

	// 2. Define a submit handler.


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Email</FormLabel>
							<FormControl>
								<Input type='email' placeholder='Enter your email' {...field} />
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
								<Textarea
									type='password'
									placeholder='Enter your password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-center'>
					<Button type='submit' variant={'outline'}>
						Log in
					</Button>
				</div>
			</form>
		</Form>
	);
}
