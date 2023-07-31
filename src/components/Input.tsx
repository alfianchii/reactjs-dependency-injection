import React, { forwardRef, Ref } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ type = "text", className = "", ...rest }, ref: Ref<HTMLInputElement>) => (
  <input
    type={type}
    ref={ref}
    {...rest}
    className={`w-full rounded-lg border-slate-300 text-black shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring focus:ring-blue-200 ${className}`.trim()}
  />
));

export default Input;
