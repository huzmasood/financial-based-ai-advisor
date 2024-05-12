import useStockData from "@/hooks/useStockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    SHEL: 4000,
    Volume: 2400,
  },
  {
    name: "Page B",
    SHEL: 3000,
    Volume: 1398,
  },
  {
    name: "Page C",
    SHEL: 2000,
    Volume: 9800,
  },
  {
    name: "Page D",
    SHEL: 2780,
    Volume: 3908,
  },
  {
    name: "Page E",
    SHEL: 1890,
    Volume: 4800,
  },
  {
    name: "Page F",
    SHEL: 2390,
    Volume: 3800,
  },
  {
    name: "Page G",
    SHEL: 3490,
    Volume: 4300,
  },
];

export default function Chart() {

  const { data: stockData, isLoading, isError } = useStockData();

  console.log(stockData?.data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  return (
    <>
    <h1>As of {new Date(stockData?.data[0][0] * 1000).toLocaleString()}</h1>
    <LineChart width={500} height={300} data={data}>
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
      <Line type="monotone" dataKey="SHEL" stroke="#82ca9d" />
    </LineChart>
    </>
  );
}
