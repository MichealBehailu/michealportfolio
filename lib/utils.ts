import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//only for the shadcn

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
