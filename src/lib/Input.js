import React, {Component} from "react";
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        return (
            <input
                type={this.props.type}
                id={this.props.id}
                className={this.props.error ? 'react-tailwind-input--error' : 'react-tailwind-input'}
                value={this.props.value}
                required={!!this.props.required}
                onChange={e => this.props.onChange && this.props.onChange(e.target.value)}
            />
        );
    }
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
};

export default Input;