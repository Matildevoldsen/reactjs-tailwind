import React from "react";

const Input = ({type = "text", inline = false, label, error, value, onChange}) => (
    <div className="mb-4">
        {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
        <input
            type={type}
            className={error ? 'react-tailwind-input--error' : 'react-tailwind-input'}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
);

export default Input;