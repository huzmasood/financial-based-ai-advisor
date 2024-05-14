import useStockData from "@/hooks/useStockData";
import { convertData } from "@/lib/utils";
import { useMemo, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart({ searchValue }: any) {
  const cachedSearchValue = useMemo(() => searchValue, [searchValue]);

  const { data: stockData, isLoading, isError, refetch } = useStockData(cachedSearchValue);

  useEffect(() => {
    refetch();
  }, [searchValue, refetch]);

  const date = useMemo(() => {
    //@ts-ignore
    if (stockData && stockData.data && stockData.data.length > 0) {
      //@ts-ignore
      return new Date(stockData.data[0][0] * 1000).toLocaleString();
    }
    return '';
  }, [stockData]);

  //@ts-ignore
  const convertedData = useMemo(() => convertData(stockData?.data || [], searchValue), [stockData]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (stockData?.status === 0) return <div>Please enter a valid company symbol</div>;

  return (
    <>
      <h1>As of {date}</h1>
      <LineChart width={500} height={300} data={convertedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Volume"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={cachedSearchValue} stroke="#82ca9d" />
      </LineChart>
    </>
  );
}
