import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPrice = (price: number): string => {
  return `${price.toFixed(2)} EUR`
}

export const fixPrice = (price: number): number => {
  return Math.round(price * 100) / 100;
};