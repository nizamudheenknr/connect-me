import React from 'react';

const InputField = ({ label, type, placeholder,value ,onChange}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-200 text-sm mb-2">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
