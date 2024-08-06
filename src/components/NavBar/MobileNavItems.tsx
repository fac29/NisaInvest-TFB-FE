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
import { buttonVariants } from '../ui/button';
import { NavItemsProps, navItems } from './NavItems';

/**
 * This iterates over the navItems array to render the navigation menu items automatically.
 * This means if the links change, you don't have to hardcode them but this should reflect those changes.
 * The buttons are currently hardcoded but as these are unlikely to change, hopefully
 * this isn't an issue.
 */

interface MobileNavItemsProps {
	classNameValue: string;
	isLoggedIn: boolean; 
  }


function MobileNavItems({ classNameValue, isLoggedIn }: MobileNavItemsProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList className={classNameValue}>
				{navItems.map((item) =>
					item.items ? (
						item.items.map((subItem) => (
							<NavigationMenuItem key={subItem.name}>
								<Link
									to={subItem.path}
									className={buttonVariants({ variant: 'link' })}
								>
									<NavigationMenuLink>{subItem.name}</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))
					) : (
						<Link
							to={item.path}
							className={buttonVariants({ variant: 'link' })}
						>
							<NavigationMenuLink>{item.name}</NavigationMenuLink>
						</Link>
					)
				)}
				{isLoggedIn ? (
					<>
						<NavigationMenuItem>
							<Link
								to='/account'
								className={buttonVariants({ variant: 'link' })}
							>
								<NavigationMenuLink>Account</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								to='/logout'
								className={buttonVariants({ variant: 'link' })}
							>
								<NavigationMenuLink>Log out</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</>
				) : (
					<>
						<NavigationMenuItem>
							<Link to='/login' className={buttonVariants({ variant: 'link' })}>
								<NavigationMenuLink>Login</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								to='/signup'
								className={buttonVariants({ variant: 'link' })}
							>
								<NavigationMenuLink>Sign up</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</>
				)}
				<NavigationMenuItem>
					<Link to='/corporate' className={buttonVariants({ variant: 'link' })}>
						<NavigationMenuLink>Book a Demo</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default MobileNavItems;
