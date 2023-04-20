import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 200,
    pv: 50,
    amt: 360,
  },
  {
    name: "Week 2",
    uv: 150,
    pv: 220,
    amt: 230,
  },
  {
    name: "Week 3",
    uv: 230,
    pv: 100,
    amt: 200,
  },
  {
    name: "Week 4",
    uv: 230,
    pv: 350,
    amt: 120,
  },
];

const Graph = () => {
  return (
    <>
      <ResponsiveContainer width="90%" height="70%" className="mt-5">
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Graph;
