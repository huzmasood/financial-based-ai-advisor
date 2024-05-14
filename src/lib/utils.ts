import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// @ts-ignore
export function convertData(originalData, searchValue) {
  const uniqueNames = new Set();
  // @ts-ignore
  const convertedData = originalData.reduce((acc, item) => {
    const timestamp = item[0];
    const hour = new Date(timestamp * 1000).toLocaleString('en-US', {hour: 'numeric', hour12: true}); // Convert timestamp to hour with locale formatting
    const name = hour;

    if (!uniqueNames.has(name)) {
      uniqueNames.add(name);
      acc = [
        ...acc,
        {
          name: name,
          [searchValue]: item[1],
          Volume: item[2]
        }
      ];
    }

    return acc;
  }, []);

  return convertedData;
}