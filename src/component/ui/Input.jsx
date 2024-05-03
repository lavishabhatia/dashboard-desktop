import React from "react";

const Input = ({ errors, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...props}
        name={name}
        className="bg-black/20 shadow-md placeholder:text-sm rounded-full backdrop-blur-xl px-3 py-1 placeholder:text-black"
      />
      {errors && errors[name] && (
        <div className="text-red-500 text-xs">{errors[name].message}</div>
      )}
    </div>
  );
};

export default Input;
