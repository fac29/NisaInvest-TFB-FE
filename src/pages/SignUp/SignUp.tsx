import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';

function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		try {
			await signUp(email, password);
			// Redirect to login page or dashboard after successful sign-up
			navigate('/login');
		} catch (err) {
			setError('Sign-up failed. Please try again.');
			console.error('Sign-up error:', err);
		}
	};

	return (
		<div className='container mx-auto min-h-screen flex items-center justify-center'>
			<div className='w-full max-w-md space-y-8'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold'>
						Thanks for your interest in Nisa Invest
					</h1>
					<p className='mt-2 text-sm text-gray-600'>
						Please fill out the details below to create an account
					</p>
				</div>
				<SignUpForm />
				{/* <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form> */}
				<p className='text-center'>
					I already have an account.{' '}
					<Button variant={'link'} className='px-0 text-base'>
						<Link to={'/login'}>Log in</Link>
					</Button>
				</p>
			</div>
		</div>
	);
}

export default SignUp;
