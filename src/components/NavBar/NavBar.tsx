import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { Button } from '../ui/button';

/**
 * Here you can determine the navigation links you want to include.
 * If navigation links come under a header, store them in an array of items.
 * Otherwise, store them as an object with the name and path keys.
 */

const navItems = [
	{ name: 'Home', path: '/' },
	{
		name: 'About',
		items: [
			{ name: 'Our Story', path: '/about' },
			{ name: 'Meet the Planners', path: '/advisors' },
		],
	},
	{
		name: 'Knowledge Hub',
		items: [
			{ name: 'Book a Session', path: '/booking' },
			{ name: 'Resources', path: '/resources' },
			{ name: 'Podcast', path: '/podcast' },
			{ name: 'FAQs', path: '/faq' },
			{ name: 'Contact Us', path: '/contact' },
		],
	},
];

// const navButtons = [
// 	{
// 		name: 'login',
// 		true: [
// 			{ name: 'Account', path: '/account' },
// 			{ name: 'Log Out', path: '/logout' },
// 		],
// 		false: [
// 			{ name: 'Login', path: '/login' },
// 			{ name: 'Sign Up', path: '/signup' },
// 		],
// 	},
// 	{ name: 'Book a Demo', path: '/corporate' },
// ];

function NavBar() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [isLoggedIn, setLogIn] = useState(true);

	/**
	 * This iterates over the navItems array to render the navigation menu items automatically.
	 * This means if the links change, you don't have to hardcode them but this should reflect those changes.
	 */
	const NavItems = () => (
		<NavigationMenu>
			<NavigationMenuList>
				{navItems.map((item) => (
					<NavigationMenuItem key={item.name}>
						{item.items ? (
							<>
								<NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul>
										{item.items.map((subItem) => (
											<li>
												<Button type='button' variant={'link'}>
													<Link to={subItem.path}>
														<NavigationMenuLink>
															{subItem.name}
														</NavigationMenuLink>
													</Link>
												</Button>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</>
						) : (
							<Button type='button' variant={'link'}>
								<Link to={item.path}>
									<NavigationMenuLink>{item.name}</NavigationMenuLink>
								</Link>
							</Button>
						)}
					</NavigationMenuItem>
				))}
				{isLoggedIn ? (
					<>
						<NavigationMenuItem>
							<Button type='button' variant={'outline'}>
								<Link to='/account'>
									<NavigationMenuLink>Account</NavigationMenuLink>
								</Link>
							</Button>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Button type='button' variant={'outline'}>
								<Link to='/logout'>
									<NavigationMenuLink>Log out</NavigationMenuLink>
								</Link>
							</Button>
						</NavigationMenuItem>
					</>
				) : (
					<>
						<NavigationMenuItem>
							<Button type='button' variant={'outline'}>
								<Link to='/login'>
									<NavigationMenuLink>Login</NavigationMenuLink>
								</Link>
							</Button>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Button type='button' variant={'outline'}>
								<Link to='/signup'>
									<NavigationMenuLink>Sign up</NavigationMenuLink>
								</Link>
							</Button>
						</NavigationMenuItem>
					</>
				)}
				<NavigationMenuItem>
					<Button type='button' variant={'outline'}>
						<Link to='/corporate'>
							<NavigationMenuLink>Book a Demo</NavigationMenuLink>
						</Link>
					</Button>
				</NavigationMenuItem>
				{/* {navButtons.map((button) => (
					<NavigationMenuItem key={button.name}>
						{button.name == 'login' && isLoggedIn ? (
							{button['true'].map(())
							<Button type='button' variant={'outline'}>
								<Link to={button.true.path}>
									<NavigationMenuLink>{button.name}</NavigationMenuLink>
								</Link>
							</Button>}
							)}
					</NavigationMenuItem>
				))} */}
			</NavigationMenuList>
		</NavigationMenu>
	);

	return (
		<div className='w-full flex items-center justify-between p-4'>
			<Link to='/' className='shrink-0'>
				<img src='/logo.png' className='size-20' alt='Nisa Invest' />
			</Link>
			<NavItems />
			{/* <NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Button type='button' variant={'link'}>
							<Link to='/'>
								<NavigationMenuLink>Home</NavigationMenuLink>
							</Link>
						</Button>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>About</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/about'>
											<NavigationMenuLink>Our Story</NavigationMenuLink>
										</Link>
									</Button>
								</li>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/advisors'>
											<NavigationMenuLink>Meet the Planners</NavigationMenuLink>
										</Link>
									</Button>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Knowledge Hub</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/book'>
											<NavigationMenuLink>Book a Session</NavigationMenuLink>
										</Link>
									</Button>
								</li>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/advisors'>
											<NavigationMenuLink>Resources</NavigationMenuLink>
										</Link>
									</Button>
								</li>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/advisors'>
											<NavigationMenuLink>Podcast</NavigationMenuLink>
										</Link>
									</Button>
								</li>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/faq'>
											<NavigationMenuLink>FAQs</NavigationMenuLink>
										</Link>
									</Button>
								</li>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/corporate'>
											<NavigationMenuLink>For Employers</NavigationMenuLink>
										</Link>
									</Button>
								</li>
								<li>
									<Button type='button' variant={'link'}>
										<Link to='/contact'>
											<NavigationMenuLink>Contact Us</NavigationMenuLink>
										</Link>
									</Button>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Button type='button' variant={'link'}>
							<Link to='/corporate'>
								<NavigationMenuLink>For Employers</NavigationMenuLink>
							</Link>
						</Button>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Button type='button' variant={'outline'}>
							<Link to='/login'>
								<NavigationMenuLink>Login</NavigationMenuLink>
							</Link>
						</Button>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Button type='button' variant={'outline'}>
							<Link to='/signup'>
								<NavigationMenuLink>Sign up</NavigationMenuLink>
							</Link>
						</Button>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu> */}
		</div>
	);
}

export default NavBar;
