import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { LoginForm } from '@/components/LoginForm/LoginForm';

function App() {
	return (
		<>
			<p>$ We are Nisa Invest. We are here to sort out your finances! $</p>
			<Input></Input>
			<RadioGroup defaultValue='option-one'>
				<div className='flex items-center space-x-2'>
					<RadioGroupItem value='option-one' id='option-one' />
					<Label htmlFor='option-one'>Option One</Label>
				</div>
				<div className='flex items-center space-x-2'>
					<RadioGroupItem value='option-two' id='option-two' />
					<Label htmlFor='option-two'>Option Two</Label>
				</div>
			</RadioGroup>
			<Textarea></Textarea>
			<LoginForm></LoginForm>
		</>
	);
}

export default App;
