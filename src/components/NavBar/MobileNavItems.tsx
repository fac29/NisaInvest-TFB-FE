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
import { NavItemsProps, navItems } from './NavItems';

/**
 * This iterates over the navItems array to render the navigation menu items automatically.
 * This means if the links change, you don't have to hardcode them but this should reflect those changes.
 * The buttons are currently hardcoded but as these are unlikely to change, hopefully
 * this isn't an issue.
 */
function MobileNavItems({ classNameValue }: NavItemsProps) {
	const [isLoggedIn, setLogIn] = useState(false);

	return (
		<NavigationMenu>
			<NavigationMenuList className={classNameValue}>
				{navItems.map((item) =>
					item.items ? (
						item.items.map((subItem) => (
							<NavigationMenuItem key={subItem.name}>
								<Button type='button' variant={'link'}>
									<Link to={subItem.path}>
										<NavigationMenuLink>{subItem.name}</NavigationMenuLink>
									</Link>
								</Button>
							</NavigationMenuItem>
						))
					) : (
						<Button type='button' variant={'link'}>
							<Link to={item.path}>
								<NavigationMenuLink>{item.name}</NavigationMenuLink>
							</Link>
						</Button>
					)
				)}
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

export default MobileNavItems;
