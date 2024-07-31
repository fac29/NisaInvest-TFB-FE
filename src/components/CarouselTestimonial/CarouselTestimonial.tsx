import * as React from 'react';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

/* Refer for documentation:
https://ui.shadcn.com/docs/components/carousel
https://www.embla-carousel.com/plugins/autoplay/ */

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
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 4000,
						stopOnMouseEnter: true,
					}),
				]}
				className='w-full max-w-7xl'
			>
				<CarouselPrevious />
				<CarouselContent className='-ml-2 md:-ml-20'>
					{testimonials.map((testimonial, index) => (
						<CarouselItem
							key={index}
							className='pl-2 md:pl-20  md:basis-1/2 lg:basis-1/3'
						>
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
