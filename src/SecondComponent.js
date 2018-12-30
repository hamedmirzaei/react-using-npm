import React, { Component } from 'react';

class SecondComponent extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			toggle: true,
			helloworld: 'Hello'
		};
		
		this.onClick = this.onClick.bind(this);
	}
	
	onClick() {
		this.setState((prevState, props) => ({
			toggle: !prevState.toggle,
			helloworld: prevState.toggle?'World!':'Hello'
		}));
	}
	
	render() {
		return (
			<div onClick={this.onClick}>
				<span>SecondComponent: {this.props.name} and Toggle is: {this.state.helloworld}</span>
			</div>
		)
	}
}

export default SecondComponent