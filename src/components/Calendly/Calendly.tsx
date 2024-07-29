import { InlineWidget } from 'react-calendly';

/* This takes advantage of react-calendly library.
Refer to https://www.npmjs.com/package/react-calendly for optional component props to further customise the widget as necessary */

export function Calendly() {
	return (
		<div>
			<InlineWidget url='https://calendly.com/fih-nisainvest?text_color=202328&primary_color=ff4a1c' />
		</div>
	);
}
