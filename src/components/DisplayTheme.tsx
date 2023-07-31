import { useAppContext } from "../hooks/useAppContext";

const DisplayTheme = () => {
  const { theme } = useAppContext();

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
