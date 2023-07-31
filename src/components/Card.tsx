import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: Props) => (
  <div
    className={`overflow-hidden rounded-lg bg-white shadow ${className}`.trim()}
  >
    {children}
  </div>
);

const Title = ({ children, className = "" }: Props) => (
  <div className={`border-b p-4 ${className}`.trim()}>
    <h1 className={`text-xl`}>{children}</h1>
  </div>
);

const Body = ({ children, className = "" }: Props) => (
  <div className={`p-4 leading-relaxed ${className}`.trim()}>{children}</div>
);

const Footer = ({ children, className = "" }: Props) => (
  <div className={`bg-slate-100 p-4 ${className}`.trim()}>{children}</div>
);

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
