




import React from 'react';

const Button = ({ label, type = "button", onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 rounded-lg font-semibold ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
