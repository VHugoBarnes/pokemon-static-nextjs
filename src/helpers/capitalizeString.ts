export const capitalizeString = (str: string): string => {
  const firstLetter = str[0].toUpperCase();
  return `${firstLetter}${str.substring(1)}`;
};