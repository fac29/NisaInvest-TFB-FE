import { SignUpForm } from '@/components/SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';

function SignUp() {
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
				<p className='text-center'>
					I already have an account. <Link to={'/login'}>Log in</Link>
				</p>
			</div>
		</div>
	);
}

export default SignUp;
