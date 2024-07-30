import React from 'react';
import { Button } from '../ui/button';

interface ProfileCardProps {
	imageUrl: string;
	name: string;
	position: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
	imageUrl,
	name,
	position,
}) => {
	return (
		<div className='flex flex-col items-center'>
			<div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-lilac'>
				<div className='p-4 flex justify-center'>
					<div className='w-40 h-40 rounded-full overflow-hidden'>
						<img
							className='w-full h-full object-cover'
							src={imageUrl}
							alt={`${name}'s profile`}
						/>
					</div>
				</div>
				<div className='px-6 py-4'>
					<p className='text-center text-offWhite font-bold text-xl mb-2 font-playfair'>
						{name}
					</p>
					<p className='text-center text-offWhite font-bold text-xl mb-2 font-playfair italic'>
						{position}
					</p>
				</div>
			</div>
			<Button className='mt-4' variant='outline'>
				Book My Session
			</Button>
		</div>
	);
};
