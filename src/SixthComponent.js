import React from 'react';
import {Button} from 'react-bootstrap';
var createReactClass = require('create-react-class');

/*var Button = ReactBootstrap.Button;
var Form = ReactBootstrap.Form;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;*/

var SixthComponent = createReactClass ({
	getInitialState: function() {
		return {show: false, newTitle: 'Default Text'};
	},
	
	handleTitleChange: function(e) {
		this.setState({newTitle: e.target.value});
	},
	
	changeComponent: function() {
		this.setState({show: !this.state.show});
	},
	
	render() {
		var clickableTitle;
		if (this.state.show) {
			clickableTitle = 
				<div>
					<input type="text" name="edittext" onChange={this.handleTitleChange} value={this.state.newTitle}/>
					<Button bsStyle="link" onClick={this.changeComponent}>
						<span>Submit</span>
					</Button>
				</div>
		} else {
			clickableTitle = 
				<div>
					<Button bsStyle="link" onClick={this.changeComponent}>
						<span>{this.state.newTitle}</span>
					</Button>
				</div>;
		}
		
		return (
			<div className="comment">
				{clickableTitle}
			</div>
		);
	}
});

export default SixthComponent;