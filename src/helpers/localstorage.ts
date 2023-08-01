export const setItemWithExp = (key: string, value: unknown) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exp: number = today.getTime() + 24 * 60 * 60 * 1000;
  const items = { value, exp };
  localStorage.setItem(key, JSON.stringify(items));
};

export const getItemWithExp = (key: string) => {
  const items = JSON.parse(localStorage.getItem(key) || "[]");
  const currentTime: number = new Date().getTime();
  if (items && currentTime < items.exp) return items.value;
  localStorage.removeItem(key);
  return [];
};
