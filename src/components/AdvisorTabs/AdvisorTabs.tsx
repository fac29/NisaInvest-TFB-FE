import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Badge } from '@/components/ui/badge';
import { advisorsData } from './advisorsData';
import { Schema } from 'zod';

function AdvisorTabs() {
	return (
		<Tabs defaultValue={advisorsData[0]?.value} className='w-full max-w-lg'>
			<TabsList>
				<TabsTrigger value='fahan'>Fahan Ibrahim-Hashi</TabsTrigger>
				<TabsTrigger value='other'>Other Planners</TabsTrigger>
			</TabsList>
			{advisorsData.map((advisor) => (
				<TabsContent value={advisor.value}>
					<Card>
						<CardHeader className='grid grid-cols-2 border-b-2'>
							<img src={advisor.image} className='rounded-full h-36 w-36' />
							<div className='space-x-0 space-y-2'>
								<CardTitle>{advisor.name}</CardTitle>
								<CardDescription>
									<h3 className='text-lg font-bold'>{advisor.title}</h3>
									<p className='flex items-center'>
										{advisor.location}
										<SocialIcon
											url='https://www.linkedin.com/company/nisainvest/'
											target='blank'
											className='hover:opacity-80 ml-2'
											style={{ height: 25, width: 25 }}
										></SocialIcon>
									</p>
									<p>{advisor.duration} experience</p>
								</CardDescription>
							</div>
						</CardHeader>
						<CardContent className='grid gap-3 pt-2'>
							<section>
								<h4 className='text-md font-bold pb-1'>Education</h4>
								<ul className='list-disc pl-6'>
									{advisor.education.map((school) => (
										<li>{school}</li>
									))}
								</ul>
							</section>
							<section>
								<h4 className='text-md font-bold pb-1'>Experience</h4>
								<p>{advisor.experience}</p>
							</section>
							<section>
								<h4 className='text-md font-bold pb-1'>Languages</h4>
								<div className='flex gap-1'>
									{advisor.languages.map((language) => (
										<Badge variant={'default'}>{language}</Badge>
									))}
								</div>
							</section>
							<section>
								<h4 className='text-md font-bold pb-1'>Focus Areas</h4>
								<div className='flex gap-1'>
									{advisor.focus.map((foci) => (
										<Badge variant={'default'}>{foci}</Badge>
									))}
								</div>
							</section>
						</CardContent>
						<CardFooter>
							<Link
								to='/booking'
								className={buttonVariants({ variant: 'outline' })}
							>
								Book with {advisor.name}
							</Link>
						</CardFooter>
					</Card>
				</TabsContent>
			))}
			<TabsContent value='other'>
				<Card>
					<CardHeader>
						<CardTitle>Other Planners</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent>
						Currently, Fahan Ibrahim-Hashi is the only planner available. If you
						are unable to book a session, please be patient.
					</CardContent>
					<CardFooter>
						<Link
							to='/booking'
							className={buttonVariants({ variant: 'outline' })}
						>
							Book your session
						</Link>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}

export default AdvisorTabs;
