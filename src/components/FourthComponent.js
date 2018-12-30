import React from 'react'

const FourthComponent = props => (
	<div onClick={props.onClick}>
		Hello, {props.name}! I am a FourthComponent.
	</div>
);

export default FourthComponent