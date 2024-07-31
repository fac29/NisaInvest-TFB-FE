import * as React from 'react';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export interface Testimonial {
	id?: number;
	quote: string;
	name: string;
}

export interface CarouselTestimonialProps {
	testimonials: Testimonial[];
}

export function CarouselTestimonial({
	testimonials,
}: CarouselTestimonialProps) {
	return (
		<div className='px-12'>
			<Carousel
				opts={{
					align: 'end',
				}}
				className='w-full max-w-7xl'
			>
				<CarouselPrevious />
				<CarouselContent>
					{testimonials.map((testimonial, index) => (
						<CarouselItem key={index} className='basis-1/3'>
							<TestimonialCard
								name={testimonial.name}
								text={testimonial.quote}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNext />
			</Carousel>
		</div>
	);
}
