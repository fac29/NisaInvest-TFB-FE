import React from 'react';

interface RatingStarsProps {
	rating: number;
	setRating: (rating: number) => void;
	interactive?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({
	rating,
	setRating,
	interactive = false,
}) => {
	return (
		<div>
			{[1, 2, 3, 4, 5].map((star) => {
				return (
					<span
						className='start'
						style={{
							cursor: interactive ? 'pointer' : 'default',
							color: rating >= star ? 'gold' : 'gray',
							fontSize: `35px`,
						}}
						onClick={() => {
							if (interactive) {
								setRating(star);
							}
						}}
					>
						{' '}
						★{' '}
					</span>
				);
			})}
		</div>
	);
};

export default RatingStars;
