import { useState } from "react";
import { capitalizeWords } from "../helpers/capitalizeWords";
import { currentPath } from "../helpers/currentPath";
import { Link } from "react-router-dom";

interface Props {
  elements: {
    [key: string]: string;
  };
  className?: string;
}

const Navbar = ({ elements, className = "" }: Props) => {
  const [currPath, setCurrPath] = useState<string>(currentPath);
  const changePathHandler = (path: string) => setCurrPath(path);
  return (
    <div className={`mt-2`}>
      <nav className={`mb-8 ${className}`.trim()}>
        <ol className={`select-none space-x-5`}>
          {Object.keys(elements).map((nav: string, index: number) => (
            <Link
              to={elements[nav]}
              key={index}
              onClick={() => changePathHandler(elements[nav])}
              className={`border border-transparent pb-5 outline-none transition-all duration-300 hover:border-b-indigo-400 hover:text-indigo-400 focus:border-b-indigo-400 focus:text-indigo-400 dark:hover:border-b-indigo-300 dark:hover:text-indigo-300 dark:focus:border-b-indigo-300 dark:focus:text-indigo-300
              ${
                currPath === elements[nav]
                  ? "border-b-indigo-700 text-indigo-700 dark:border-b-indigo-400/80 dark:text-indigo-400/80"
                  : "text-slate-500 dark:text-slate-400"
              }
            `}
            >
              {capitalizeWords(nav)}
            </Link>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
