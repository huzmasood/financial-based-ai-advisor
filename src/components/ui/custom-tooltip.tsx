// @ts-nocheck
export default function CustomTooltip({ active, payload, label, data }: any) {
  if (active && payload && payload.length) {
    const searchValueData = payload.find(p => p.dataKey !== "Volume");
    return (
      <div>
        <p>{`Time: ${label}`}</p>
        <p>{`Volume: ${data.find((p => p.time === label)).Volume}`}</p>
        <p>{`${searchValueData ? searchValueData.dataKey : ''}: ${searchValueData ? searchValueData.value : ''}`}</p>
      </div>
    );
  }
  return null;
}