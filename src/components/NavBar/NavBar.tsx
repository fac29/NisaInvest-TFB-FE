import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavItems from './NavItems';
import MobileNavItems from './MobileNavItems';

import { Button } from '../ui/button';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

import { FaBars } from 'react-icons/fa6';

function NavBar() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [isLoggedIn, setLogIn] = useState(false);

	return (
		<div className='w-full flex items-center justify-between p-4 fixed top-0 bg-white z-10'>
			<Link to='/' className='shrink-0'>
				<img src='/logo.png' className='size-20' alt='Nisa Invest' />
			</Link>
			{isMobile ? (
				<Sheet>
					<SheetTrigger asChild>
						<Button variant='outline' size='icon'>
							<FaBars className='h-6 w-6' />
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<MobileNavItems
							classNameValue={'flex-col gap-2'}
							isLoggedIn={isLoggedIn}
						/>
					</SheetContent>
				</Sheet>
			) : (
				<NavItems classNameValue='' isLoggedIn={isLoggedIn} />
			)}
		</div>
	);
}

export default NavBar;
