import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// @ts-ignore
export function convertData(originalData, searchValue) {
  const uniqueTime = new Set();
  // @ts-ignore
  const convertedData = originalData.reduce((acc, item) => {
    const timestamp = item[0];
    const hour = new Date(timestamp * 1000).toLocaleString('en-US', {hour: 'numeric', hour12: true}); // Convert timestamp to hour with locale formatting
    const time = hour;

    if (!uniqueTime.has(time)) {
      uniqueTime.add(time);
      acc = [
        {
          time: time,
          [searchValue]: item[1],
          Volume: item[2]
        },
        ...acc
      ];
    }

    return acc;
  }, []);

  return convertedData;
}