import { useState, useEffect } from 'react';
import stage1 from '/stage1.jpg';
import stage2 from '/stage2.jpg';
import stage3 from '/stage3.jpg';
import stage4 from '/stage4.jpg';
import stage5 from '/stage5.png';

const stages = [
	{
		id: 1,
		image: stage1,
		caption: 'Graduating university',
	},
	{
		id: 2,
		image: stage2,
		caption: 'Beginning a career',
	},
	{
		id: 3,
		image: stage3,
		caption: 'Giving back',
	},
	{
		id: 4,
		image: stage4,
		caption: 'Exploring the world',
	},
	{
		id: 5,
		image: stage5,
		caption: 'Starting a business',
	},
];

function CarouselStages() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			slideRight();
		}, 10000);
	}),
		[current];

	const slideRight = () => {
		setCurrent(current === stages.length - 1 ? 0 : current + 1);
	};
	return (
		<div className='box-content h-64 w-full max-w-lg relative'>
			<ul>
				{stages.map((stage, index: number) => (
					<li
						key={stage.id}
						className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
                ${index === current ? 'opacity-100' : 'opacity-0'} ${index === current ? 'pointer-events-auto' : 'pointer-events-none'}`}
					>
						<figure>
							<img src={stage.image} />
							<figcaption>{stage.caption}</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CarouselStages;
