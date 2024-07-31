import {
	FaCloudRain,
	FaMoneyBill,
	FaHourglassHalf,
	FaSeedling,
} from 'react-icons/fa6';

interface WidgetProps {
	type: 'heading' | 'goal';
	pillar: ['savings', 'expenses', 'investing', 'charity'];
}

function Widget({ type, pillar }: WidgetProps) {
	return <></>;
}

export default Widget;
