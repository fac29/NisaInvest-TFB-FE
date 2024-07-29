import React, { Component } from 'react';
import { InlineWidget } from 'react-calendly';
export function Calendly() {
	// componentDidMount() {
	// 	// whatever stuff you need here
	// }
	// componentWillUnmount() {
	// 	// whatever cleanup stuff you need here
	// }
	return (
		<div>
			<InlineWidget url='https://calendly.com/fih-nisainvest?text_color=202328&primary_color=ff4a1c' />
		</div>
	);
}
