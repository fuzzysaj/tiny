export function tiny(str: string): string {
  if (typeof str !== "string") throw new TypeError("Not a string.");
  return str.replace(/\s/g, "");
};
