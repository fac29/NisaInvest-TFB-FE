import { IconType } from 'react-icons/lib';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';

export interface Step {
	icon: IconType;
	number: number;
	description: string;
}

interface StepsCardProps {
	steps: Step[];
}

function StepsCard({ steps }: StepsCardProps) {
	return (
		<>
			{steps.map((step: Step) => (
				<div className='flex flex-col items-center'>
					<Badge className='-mb-4 z-10 size-8 items-center justify-center text-lg'>
						<step.icon />
					</Badge>
					<Card className='flex flex-col items-center justify-center w-[200px] text-center'>
						<CardHeader>
							<h3 className='font-bold text-lg'>Step {step.number}</h3>
						</CardHeader>
						<CardContent>
							<p>{step.description}</p>
						</CardContent>
					</Card>
				</div>
			))}
		</>
	);
}

export default StepsCard;
