import React, { Component } from 'react';

class FirstComponent extends Component {
	render() {
		return (
			<span>FirstComponent: {this.props.name}</span>
		);
	}
}

export default FirstComponent