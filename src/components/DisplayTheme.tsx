import { useThemeContext } from "../hooks/useThemeContext";

const DisplayTheme = () => {
  const [{ theme }] = useThemeContext();

  return (
    <p className={`text-center font-medium`}>
      <span className={`font-bold`}>
        App theme ({theme === "light" ? "🌞" : "🌙"}):
      </span>{" "}
      {theme}
    </p>
  );
};

export default DisplayTheme;
