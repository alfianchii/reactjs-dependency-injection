import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  textColor?: string;
}

const Button = ({
  children,
  type = "submit",
  className = "",
  text,
  color = "bg-black",
  textColor = "text-white",
  ...rest
}: Props) => (
  <button
    type={type}
    className={`flex items-center justify-center rounded-lg px-4 py-2 outline-none transition-all duration-300 focus:ring focus:ring-gray-300 focus:ring-offset-2 ${color} ${text} ${textColor} ${className}`.trim()}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
