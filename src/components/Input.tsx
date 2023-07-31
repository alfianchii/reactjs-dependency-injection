import React, { forwardRef, Ref } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ type = "text", className = "", ...rest }, ref: Ref<HTMLInputElement>) => (
  <input
    type={type}
    ref={ref}
    {...rest}
    className={`w-full rounded-lg border-slate-300 text-black placeholder-gray-600 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring focus:ring-blue-200 dark:border-slate-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-sky-200 dark:focus:ring dark:focus:ring-sky-600 ${className}`.trim()}
  />
));

export default Input;
