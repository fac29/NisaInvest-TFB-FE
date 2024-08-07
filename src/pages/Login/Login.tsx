import React from 'react';
import { LoginForm } from '@/components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Login() {
	const handleLoginSuccess = () => {
		// You can add any additional logic here that needs to run after successful login
		console.log('Login successful');
	};
	return (
		<>
			<div className='container mx-auto min-h-screen flex items-center justify-center'>
				<div className='w-full max-w-md space-y-8'>
					<div className='text-center'>
						<h1 className='font-playfair text-center text-3xl font-bold'>
							Log In
						</h1>
						<p className='mt-2 text-sm text-gray-600'>
							Please enter your credentials below to access your Nisa Invest
							account.
						</p>
					</div>
					<LoginForm onLoginSuccess={handleLoginSuccess} />
					<p className='text-center'>
						I don't have an account yet.{' '}
						<Button variant={'link'} className='px-0 text-base'>
							<Link to={'/signup'}>Sign up</Link>
						</Button>
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
