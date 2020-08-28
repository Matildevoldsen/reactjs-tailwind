import React from "react";

const primary = "react-tailwind-button--primary";
const success = "react-tailwind-button--success";

function getType(type = 'primary') {
    if (type === 'primary') {
        return primary;
    } else if (type === 'success') {
        return success;
    }
}

const Button = (props) => (
    <button
        className={getType(props.type)}
        type="button">
        { props.children }
    </button>
);

export default Button;