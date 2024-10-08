import React from 'react';
import { Separator } from '../ui/separator';

interface TestimonialCardProps {
	name: string;
	text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text }) => {
	return (
		<div className='bg-offWhite border-solid border-2 border-lilac rounded-xl max-w-full p-4 h-full flex flex-col justify-between'>
			<div>
				<p className='text-left text-base italic font-source-sans'>{text}</p>
			</div>
			<div>
				<Separator className='bg-lilac mt-4 mb-2'></Separator>
				<p className='text-left tracking-wide text-base font-semibold font-playfair'>
					{name}
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
