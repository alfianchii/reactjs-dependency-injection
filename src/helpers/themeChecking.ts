const body = document.documentElement;

export const themeValidate = (theme: string) =>
  theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches
    ? body.setAttribute("data-mode", "dark")
    : body.removeAttribute("data-mode");
