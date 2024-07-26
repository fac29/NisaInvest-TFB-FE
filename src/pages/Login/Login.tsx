import React from 'react';
import { LoginForm } from '@/components/LoginForm/LoginForm';

function Login() {
	return (
		<>
			<div className='container mx-auto min-h-screen flex items-center justify-center'>
				<div className='w-full max-w-md space-y-8'>
					<div className='text-center'>
						<h1 className='text-3xl font-bold'>
							Access Your Nisa Invest Account
						</h1>
						<p className='mt-2 text-sm text-gray-600'>
							Please enter your credentials below to log in
						</p>
					</div>
					<LoginForm />
				</div>
			</div>
		</>
	);
}

export default Login;
