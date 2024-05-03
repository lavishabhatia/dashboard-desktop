import React from "react";

const Input = ({ ...props }) => {
  return (
    <>
      <input
        {...props}
        className="bg-black/20 shadow-md placeholder:text-sm rounded-full backdrop-blur-xl px-3 py-1 placeholder:text-black"
      />
    </>
  );
};

export default Input;
