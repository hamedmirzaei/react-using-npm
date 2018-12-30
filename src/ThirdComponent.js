import React from 'react'

const ThirdComponent = props => (
	<div onClick={props.onClick}>
		Hello, {props.name}! I am a ThirdComponent.
	</div>
);

export default ThirdComponent