export const capitalizeWords = (str: string): string =>
  str
    .split(/(?=[A-Z])/)
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
