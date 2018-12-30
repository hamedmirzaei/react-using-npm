import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FivethComponent extends Component {
	render() {
		return (
			<span>{this.props.name}</span>
		);
	}
};

FivethComponent.propTypes = {
	name: PropTypes.string.isRequired
};

FivethComponent.defaultProps = {
	name: 'Hamed Mirzaei'
};

export default FivethComponent