"use client"

import React, { useCallback, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Chart from "@/components/component/chart";
import { Search } from '@/components/component/search';
import { Combobox } from '@/components/component/combobox';

export default function Dashboard() {
  const queryClient = new QueryClient();
  const [searchValue, setSearchValue] = useState("SHEL");

  const handleSearchChange = useCallback((value: any) => {
    setSearchValue(value);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Search onSearchChange={handleSearchChange} />
      <div className="flex min-h-screen flex-col items-center justify-center">
        {/* <Combobox /> */}
        <Chart searchValue={searchValue}
         />
      </div>
    </QueryClientProvider>
  );
}