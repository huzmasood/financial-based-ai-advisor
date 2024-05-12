'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
import Chart from "@/components/component/chart";

export default function Dashboard() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Chart />
      </div>
    </QueryClientProvider>
  );
}