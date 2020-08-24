import React from "react";

const Input = ({type = "text", inline = false, label, error, value, onChange}) => (
    <div className="mb-4">
        {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
        <input
            type={type}
            className={error ? 'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
);

export default Input;