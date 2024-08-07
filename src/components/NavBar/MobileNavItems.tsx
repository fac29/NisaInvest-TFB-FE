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
function MobileNavItems({ classNameValue, isLoggedIn }: NavItemsProps) {
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
						<NavigationMenuItem key={item.name}>
							<Link
								to={item.path}
								className={buttonVariants({ variant: 'link' })}
							>
								<NavigationMenuLink>{item.name}</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					)
				)}
				{isLoggedIn ? (
					<>
						<NavigationMenuItem key='account'>
							<Link
								to='/account'
								className={buttonVariants({ variant: 'link' })}
							>
								<NavigationMenuLink>Account</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem key='logout'>
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
						<NavigationMenuItem key='login'>
							<Link to='/login' className={buttonVariants({ variant: 'link' })}>
								<NavigationMenuLink>Login</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem key='signup'>
							<Link
								to='/signup'
								className={buttonVariants({ variant: 'link' })}
							>
								<NavigationMenuLink>Sign up</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</>
				)}
				<NavigationMenuItem key='corporate'>
					<Link to='/corporate' className={buttonVariants({ variant: 'link' })}>
						<NavigationMenuLink>Book a Demo</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default MobileNavItems;
