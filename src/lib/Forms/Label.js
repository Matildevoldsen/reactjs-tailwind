import React from "react";
import PropTypes from 'prop-types';

class Label extends React.Component {
    render() {
        return (
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={this.props.to}>{this.props.children}</label>
        );
    }
}

Label.propTypes = {
    to: PropTypes.string
};


export default Label;