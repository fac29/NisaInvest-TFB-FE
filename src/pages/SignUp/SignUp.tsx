import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';
function SignUp() {
	const handleSignUpSuccess = () => {
		// You can add any additional logic here that needs to run after successful sign-up
		console.log('Sign-up successful');
	};

	return (
		<div className='container mx-auto min-h-screen flex items-center justify-center pt-8'>
			<div className='w-full max-w-md space-y-8'>
				<div className='text-center'>
					<h1 className='text-3xl font-playfair font-bold'>Sign Up</h1>
					<p className='mt-2 text-sm text-gray-600'>
						Thank you for your interest in Nisa Invest. Please fill out the
						details below to create an account.
					</p>
				</div>
				<SignUpForm onSignUpSuccess={handleSignUpSuccess} />
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
