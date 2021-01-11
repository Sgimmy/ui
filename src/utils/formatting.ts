export const firstLetterUpperCase = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function replaceNull<T>(value?: T | null): T | undefined {
  if (value === null) {
    return undefined;
  }
  return value;
}

export { replaceNull };
