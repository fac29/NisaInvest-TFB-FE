import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';

interface NavItemsProps {
	classNameValue: string;
}

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

/**
 * This iterates over the navItems array to render the navigation menu items automatically.
 * This means if the links change, you don't have to hardcode them but this should reflect those changes.
 * The buttons are currently hardcoded but as these are unlikely to change, hopefully
 * this isn't an issue.
 */
function NavItems({ classNameValue }: NavItemsProps) {
	const [isLoggedIn, setLogIn] = useState(false);

	return (
		<NavigationMenu>
			<NavigationMenuList className={classNameValue}>
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
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default NavItems;
