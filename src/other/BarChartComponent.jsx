import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ data }) => {
  const chartData = [
    { name: "New Task", value: data.newTask },
    { name: "Completed", value: data.completed },
    { name: "Accepted", value: data.active },
    { name: "Failed", value: data.failed },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" stroke="#555" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
