import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	//FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { signIn } from '@/lib/auth'
import { useState } from 'react'
import { useAuth } from '@/AuthContext'

const formSchema = z.object({
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters long.',
	}),
})

interface LoginFormProps {
    onLoginSuccess: () => void;
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()
	const { setIsLoggedIn } = useAuth()

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true)
		setError(null)
		try {
			await signIn(values.email, values.password)
			setIsLoggedIn(true)
            onLoginSuccess()
			navigate('/dashboard')
		} catch (error) {
			setError('Failed to sign in. Please check your credentials.')
			console.error('Login error:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				{error && <div className='text-sm font-medium text-destructive text-center'>{error}</div>}
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
				<div className='flex justify-center'>
					<Button type='submit' variant={'outline'} disabled={isLoading}>
						{isLoading ? 'Logging in...' : 'Log in'}
					</Button>
				</div>
			</form>
		</Form>
	)
}
