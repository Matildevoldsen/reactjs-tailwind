import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {
    getType(type = 'primary') {
        return 'react-tailwind-button--' + type;
    }

    rounded(rounded = false) {
        return " react-tailwind--rounded-full";
    }

    outline(outline = false) {
        if (outline) {
            return ' react-tailwind--outline';
        }
    }

    size(size = 'md') {
        return ' react-tailwind--' + size;
    }


    render() {
        return (
            <button
                className={this.getType(this.props.type) + this.rounded(this.props.rounded) + this.outline(this.props.outline) + this.size(this.props.size)}
                type="button">
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    size: PropTypes.string
};

export default Button;