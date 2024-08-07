import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export function Search({ onSearchChange }: any) {
  const [searchValue, setSearchValue] = useState("SHEL");

  const handleInputChange = (event: any) => {
    const value = event.target.value.toUpperCase();
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow mb-2">
      <Input
        className="flex-1 text-gray-900 dark:text-white bg-transparent border-none focus:ring-0"
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      <SearchIcon className="text-gray-500 dark:text-gray-400" />
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
