import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function convertToCamelCase(inputString: string) {
  const words = inputString.split(" ");

  const capitalizedWords = words.map(
    (word) => word.trim().charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  return capitalizedWords.join("");
}
