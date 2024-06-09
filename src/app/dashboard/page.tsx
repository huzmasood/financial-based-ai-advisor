"use client"

import React, { useCallback, useState } from 'react';
import Chart from "@/components/component/chart";
import { Search } from '@/components/component/search';
import { Combobox } from '@/components/component/combobox';
import Link from 'next/link';

export default function Dashboard() {
  const [searchValue, setSearchValue] = useState("SHEL");

  const handleSearchChange = useCallback((value: any) => {
    setSearchValue(value);
  }, []);

  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      <Link style={{margin: "10px"}} href={"/highest-divident"}>See highest divident</Link>
      <Link style={{margin: "10px"}} href={"/board-meeting"}>See board meeting</Link>
      <div className="flex min-h-screen flex-col items-center justify-center">
        {/* <Combobox /> */}
        <Chart searchValue={searchValue}
         />
      </div>
      </>
  );
}
