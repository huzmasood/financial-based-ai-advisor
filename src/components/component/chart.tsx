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
import CustomTooltip from "../ui/custom-tooltip";

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

  const [minValue, maxValue] = useMemo(() => {
    if (convertedData && convertedData.length > 0) {
      const values = convertedData.map((item: any) => item[cachedSearchValue]);
      const min = Math.min(...values);
      const max = Math.max(...values);
      return [min, max];
    }
    return [0, 0];
  }, [convertedData, cachedSearchValue]);

  if (isLoading) return <div>Loading...</div>;
  if (cachedSearchValue.trim() === "") return <div>Please enter a company symbol</div>;
  if (isError) return <div>Error fetching data</div>;
  if (stockData?.status === 0) return <div>Please enter a valid company symbol</div>;

  return (
    <>
      <h1>As of {date}</h1>
      <LineChart width={500} height={300} data={convertedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" padding={{ left: 30, right: 30 }} />
        <YAxis domain={[minValue, maxValue]}/>
        <Tooltip content={<CustomTooltip data={convertedData} />}/>
        <Legend />
        <Line type="monotone" dataKey={cachedSearchValue} />
      </LineChart>
    </>
  );
}
