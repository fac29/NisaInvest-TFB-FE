import SpotifyEmbedPlayer from '@/components/SpotifyEmbedPlayer/SpotifyEmbedPlayer';
import { podcastEpisodes } from '@/components/SpotifyList/PodcastData';
import about2 from '/about_2.jpg';
import { Button } from '@/components/ui/button';
import { SocialIcon } from 'react-social-icons';

function About() {
	return (
		<div className='min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center font-source-sans space-y-16 pt-8'>
			<section className='space-y-4'>
				<h1 className='font-playfair text-3xl font-bold text-center'>
					Our Story
				</h1>
				<p>Salaam, I’m Fahan, the founder of Nisa Invest. 🐪💜</p>
				<p>
					I began my career in finance eight years ago, in 2016, and with it
					came a flood of questions and decisions: How do I read my payslip?
					What taxes am I paying? How do I learn about my pension? How much
					should I be saving? What about student loans, halal investing, and
					Zakat?
				</p>
				<blockquote className='pl-4 border-l-8'>
					<p>
						Alhamdulillah, working in banking and studying behavioural economics
						at university helped a lot. I also had access to financial wellness
						benefits through my workplace, which fuelled my determination to get
						started.
					</p>
				</blockquote>
				<p>
					My passion led me to start a small blog, Fahan Finance, where I shared
					my discoveries. And when my friend Sumaya started a sister’s circle at
					our mosque, I was invited to run a session on personal finance.
				</p>
				<figure className='space-y-1'>
					<img src={about2} className='w-full' />
					<figcaption className='text-sm'>
						In February 2023, I ran a session on personal finance at my mosque’s
						sisters circle
					</figcaption>
				</figure>
				<p>
					During this session, I shared my biggest lesson, which was that over
					the years:
				</p>
				<blockquote className='pl-4 border-l-8'>
					<p>
						I wasn’t only investing according to my Islamic principles. I was
						also striving to earn, spend, save, and give my money in line with
						my values as a Muslim.
					</p>
				</blockquote>
				<p>
					In the months that followed, I asked myself: What would it look like
					if I became a financial planner, started a company, and called it Nisa
					Invest so I could reach sisters everywhere?
				</p>
				<p>
					JazakAllah khair for being here. I am excited to learn about your
					goals for yourself, your legacy, and your loved ones. May Allah SWT
					make it easy, Ameen.
				</p>
			</section>
			{/* conditional rendering expression to render Spotify Player with the latest episode if the data is present */}
			<section className='space-y-4'>
				<h2 className='text-center font-playfair text-2xl font-bold'>
					Listen to the Podcast
				</h2>
				<p>
					Join me as I answer sisters’ questions on personal finance topics such
					as Shariah-compliant investing, budgeting, pensions, and general life
					admin.
				</p>
				{podcastEpisodes[0]?.uri && (
					<SpotifyEmbedPlayer
						width='576px'
						height='200px'
						uri={podcastEpisodes[0].uri}
					/>
				)}
				<div className='flex justify-center gap-4'>
					<Button variant='outline'>Listen on Spotify</Button>
					<Button variant='outline'>Listen on Apple</Button>
				</div>
			</section>
			<section className='space-y-4'>
				<h2 className='text-center font-playfair text-2xl font-bold'>
					Follow on Social Media
				</h2>
				<div className='flex justify-center gap-4'>
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
			</section>
		</div>
	);
}

export default About;
