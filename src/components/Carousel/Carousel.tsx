import { useState, useEffect } from 'react';

export interface QuoteProp {
	id?: number;
	text?: string;
	author?: string;
	valid_from?: Date | null;
	valid_to?: Date | null;
	created_at?: string | Date; // Change the type to string
}

function Carousel({ quotes }: { quotes: QuoteProp[] }) {
	const [current, setCurrent] = useState(0);
	//const [autoPlay, setAutoPlay] = useState(true);
	//let timeOut = null;

	useEffect(() => {
		setTimeout(() => {
			slideRight();
		}, 4000);
	}),
		[current];

	const slideRight = () => {
		setCurrent(current === quotes.length - 1 ? 0 : current + 1);
	};
	return (
		<div className='box-content bg-lilac border-4 rounded-full shadow-lg p-4 h-64 w-full max-w-lg relative'>
			<ul className='text-wrap'>
				{quotes.map((quote: QuoteProp, index: number) => (
					<li
						key={quote.id}
						className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
                ${index === current ? 'opacity-100' : 'opacity-0'} ${index === current ? 'pointer-events-auto' : 'pointer-events-none'}`}
					>
						<blockquote className='flex flex-col justify-center items-center h-full text-center px-7'>
							<p className='font-playfair font-semibold mb-4 text-offWhite'>
								{quote.text}
							</p>
							<footer className='source-sans italic'>— {quote.author}</footer>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Carousel;
