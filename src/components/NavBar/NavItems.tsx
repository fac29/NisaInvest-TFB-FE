import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button, buttonVariants } from '../ui/button';
import { signOut } from '@/lib/auth';

export interface NavItemsProps {
  classNameValue: string;
  isLoggedIn: boolean;
}

/**
 * Here you can determine the navigation links you want to include.
 * If navigation links come under a header, store them in an array of items.
 * Otherwise, store them as an object with the name and path keys.
 */
export const navItems = [
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

function NavItems({ classNameValue, isLoggedIn }: NavItemsProps) {
  const handleLogout = async () => {
    try {
      await signOut();
      // Optionally, you can redirect the user or update the UI here
     // window.location.href = '/'; // Redirect to home page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className={buttonVariants({ variant: 'link' })}
                        >
                          <NavigationMenuLink>{subItem.name}</NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                to={item.path}
                className={buttonVariants({ variant: 'link' })}
              >
                <NavigationMenuLink>{item.name}</NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
        
        {isLoggedIn ? (
          <>
            <NavigationMenuItem>
              <Link
                to='/account'
                className={buttonVariants({ variant: 'outline' })}
              >
                <NavigationMenuLink>Account</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                onClick={handleLogout}
                className={buttonVariants({ variant: 'outline' })}
              >
                Log out
              </Button>
            </NavigationMenuItem>
          </>
        ) : (
          <>
            <NavigationMenuItem>
              <Link
                to='/login'
                className={buttonVariants({ variant: 'outline' })}
              >
                <NavigationMenuLink>Login</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to='/signup'
                className={buttonVariants({ variant: 'outline' })}
              >
                <NavigationMenuLink>Sign up</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
        
        <NavigationMenuItem>
          <Link
            to='/corporate'
            className={buttonVariants({ variant: 'outline' })}
          >
            <NavigationMenuLink>Book a Demo</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavItems;
