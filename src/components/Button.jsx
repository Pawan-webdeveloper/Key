"use client";

import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  rightIcon,
}) => {
  const baseStyles =
    "gap-2 self-stretch px-6 py-2.5 font-medium rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]";

  const variantStyles = {
    primary: "bg-pink-200 text-black",
    secondary: "bg-zinc-100 text-black",
    link: "bg-transparent border-none shadow-none text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {children}
        {rightIcon && (
          <img
            src={rightIcon}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        )}
      </div>
    </button>
  );
};

export default Button;
