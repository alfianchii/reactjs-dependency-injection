import { useAppContext } from "../hooks/useAppContext";

const DisplayTheme = () => {
  const [{ theme }] = useAppContext();
  const body = document.documentElement;

  theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches
    ? body.setAttribute("data-mode", "dark")
    : body.removeAttribute("data-mode");

  return (
    <p className={`font-medium`}>
      <span className={`font-bold`}>
        App theme ({theme === "light" ? "🌞" : "🌙"}):
      </span>{" "}
      {theme}
    </p>
  );
};

export default DisplayTheme;
