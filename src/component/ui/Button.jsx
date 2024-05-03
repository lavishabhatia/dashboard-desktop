import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded-full w-full p-1 bg-black text-white font-medium text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
