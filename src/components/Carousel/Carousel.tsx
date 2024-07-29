
import { useState, useEffect } from 'react';

export interface QuoteProp {
    id?: number;
    text?: string;
    author?: string;
    valid_from?: Date | null;
    valid_to?: Date | null;
    created_at?: string | Date; // Change the type to string
}

function Carousel({quotes}:{quotes:QuoteProp[]}) {

    const [current, setCurrent] = useState(0);
    //const [autoPlay, setAutoPlay] = useState(true);
    //let timeOut = null;

    useEffect(() => {
        setTimeout(() => {
            slideRight();
          }, 3500);
    }),[current]

const slideRight = () => {
    setCurrent(  current === (quotes.length-1) ? 0 : current + 1 )
}
  return (
    <div className='carousel-container h-64 w-96 relative'>
    <div className='box-content bg-violet-400 border-4 rounded-lg shadow-lg p-4 h-full'>
        <ul className='object-contain'>
            {quotes.map((quote: QuoteProp, index: number) => (
                <li key={quote.id} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
                ${index === current ? 'opacity-100' : 'opacity-0'} ${index === current ? 'pointer-events-auto' : 'pointer-events-none'}`}>
             <blockquote className='flex flex-col justify-center h-full'>
                                <p className='text-lg mb-4'>{quote.text}</p>
                                <footer className='text-sm italic'>— {quote.author}</footer>
                            </blockquote>
                </li>
            ))}
        </ul>
    </div>
</div>
);
}

export default Carousel;