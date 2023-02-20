export function format(str: string) {
  const formatted = str.replace(/[\s*/]+/g, "").toLowerCase();
  return formatted;
}
