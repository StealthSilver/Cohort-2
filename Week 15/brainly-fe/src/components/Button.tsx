// creating a generic button component

import React from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
}

const variantClasses = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-300 text-black hover:bg-gray-400",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({ variant, size, text, startIcon, endIcon, onClick }: ButtonProps) => {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} flex items-center gap-2 rounded`}
      onClick={onClick}
    >
      {startIcon && <span>{startIcon}</span>}
      {text}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
