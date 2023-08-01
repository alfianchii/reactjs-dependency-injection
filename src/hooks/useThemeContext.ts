import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "../contexts/theme-context";

export const useThemeContext = (): ThemeContextValue =>
  useContext(ThemeContext);
