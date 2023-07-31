import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PlaceContentCenter = ({ children, className = "" }: Props) => (
  <div className={`bg-black`}>
    <div
      className={`flex min-h-screen items-center justify-center bg-slate-200 tracking-tight text-slate-800 antialiased ${className}`.trim()}
    >
      <div className={`mx-5 w-full max-w-lg`}>{children}</div>
    </div>
  </div>
);

export default PlaceContentCenter;
