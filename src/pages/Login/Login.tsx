import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '@/lib/auth';
import { useAuth } from '@/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      setIsLoggedIn(true); // Set login state to true
      navigate('/'); // Redirect to home page or dashboard
    } catch (err) {
      setError('Invalid login credentials. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
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
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-500 text-center">{error}</div>}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Button type="submit" className="w-full">Log In</Button>
        </form>
        <p className='text-center'>
          I don't have an account yet.{' '}
          <Button variant={'link'} className='px-0 text-base'>
            <Link to={'/signup'}>Sign up</Link>
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Login;