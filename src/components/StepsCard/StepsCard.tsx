import { Card, CardContent, CardHeader } from '../ui/card';

function StepsCard() {
	return (
		<Card className='flex flex-col items-center justify-center'>
			<CardHeader>
				<h3>Step 1</h3>
			</CardHeader>
			<CardContent>
				<p>Book your free guidance session</p>
			</CardContent>
		</Card>
	);
}

export default StepsCard;
