import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// export default {
//   title: 'Components/Button',
//   component: Button,
// };
const meta: Meta<typeof Button> = {
	component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

// Define your stories
export const Primary: Story = {
	args: {
		input: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		input: '😄👍😍💯',
	},
};

export const Tertiary: Story = {
	args: {
		...Primary.args,
		input: '📚📕📈🤓',
	},
};
