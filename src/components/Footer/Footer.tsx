import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
	return (
		<div className='bg-lilac p-8 text-offWhite mt-8'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6 '>
				{/* Social Media Section */}
				<div className='flex flex-col items-center gap-4'>
					<h2 className='font-playfair font-bold text-2xl'>Social Media</h2>
					<Separator />
					<div className='flex justify-center space-x-4'>
						<SocialIcon
							url='https://www.instagram.com/nisainvest/'
							target='blank'
							className='hover:opacity-80'
						/>
						<SocialIcon
							url='https://www.linkedin.com/company/nisainvest/'
							target='blank'
							className='hover:opacity-80'
						></SocialIcon>
					</div>
				</div>

				{/* Company Section */}
				<div className='flex flex-col items-center gap-4'>
					<h2 className='font-playfair font-bold text-2xl'>Company</h2>
					<Separator />
					<Button
						className='font-source-sans text-lg text-offWhite'
						type='button'
						variant={'link'}
					>
						<Link to={'/about'}>About Us</Link>
					</Button>
					<Button
						className='font-source-sans text-lg text-offWhite'
						type='button'
						variant={'link'}
					>
						<Link to={'/contact'}>Contact Us</Link>
					</Button>
				</div>

				{/* Legal Section */}
				<div className='flex flex-col items-center gap-4'>
					<h2 className='font-playfair font-bold text-2xl'>Legal</h2>
					<Separator />
					<Button
						className='font-source-sans text-lg text-offWhite'
						type='button'
						variant={'link'}
					>
						Privacy Policy
					</Button>
					<Button
						className='font-source-sans text-lg text-offWhite'
						type='button'
						variant={'link'}
					>
						Terms of Service
					</Button>
				</div>

				{/* Support Section */}
				<div className='flex flex-col items-center gap-4'>
					<h2 className='font-playfair font-bold text-2xl'>Support</h2>
					<Separator />
					<Button
						className='font-source-sans text-lg text-offWhite'
						type='button'
						variant={'link'}
					>
						<Link to={'/faq'}>FAQ</Link>
					</Button>
					<Button
						className='font-source-sans text-lg text-offWhite'
						type='button'
						variant={'link'}
					>
						Accessibility
					</Button>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 text-center md:text-left'>
				<div className='col-span-1 text-sm'>
					© 2024 NISA INVEST, ALL RIGHTS RESERVED.
				</div>
				<div className='col-span-3 text-xs text-justify'>
					The information provided is current as of the date of this writing and
					for informational purposes only. It should not be relied upon as
					investment advice or recommendations, does not constitute a
					solicitation to buy or sell securities, and should not be considered
					specific legal, investment, or tax advice. Investing entails risk,
					including the possible loss of principal, and past performance is not
					predictive of future results.
				</div>
			</div>
		</div>
	);
}
