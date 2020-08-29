import React from "react";

class FormError extends React.Component {
    render() {
        return (
            <p className="text-red-500 text-xs italic mt-2">{ this.props.children }</p>
        );
    }
}

export default FormError;