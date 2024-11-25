import React from "react";

const InputField = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange} // Bind the onChange handler here
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
