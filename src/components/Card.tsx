import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: Props) => (
  <div
    className={`box-border overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-slate-900/5 transition-colors duration-300 dark:bg-slate-800 ${className}`.trim()}
  >
    {children}
  </div>
);

const Title = ({ children, className = "" }: Props) => (
  <div
    className={`border-b p-4 text-base font-medium tracking-tight text-slate-900 transition-colors duration-300 dark:border-b-slate-600 dark:text-white ${className}`.trim()}
  >
    <h1 className={`text-xl`}>{children}</h1>
  </div>
);

const Body = ({ children, className = "" }: Props) => (
  <div
    className={`px-6 py-4 text-sm leading-relaxed text-slate-500 transition-all duration-75 dark:text-slate-400 ${className}`.trim()}
  >
    {children}
  </div>
);

const Footer = ({ children, className = "" }: Props) => (
  <div
    className={`bg-slate-100 p-4 dark:border-b-slate-600 ${className}`.trim()}
  >
    {children}
  </div>
);

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
