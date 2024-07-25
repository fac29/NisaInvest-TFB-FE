export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;

    fontFamily?:string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

export const Button = ({
	primary = true,
	size = 'medium',
	backgroundColor,
	fontFamily,
	label,
	...props
}: ButtonProps) => {
	return (
		<button
			type='button'
			className={['storybook-button', `storybook-button--${size}`].join(' ')}
			style={{ backgroundColor, fontFamily }}
			{...props}
		>
			{label}
		</button>
	);
};
