import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ObjectiveChart = (props) => {
  const data = [
    {
      name: "Group A",
      value: props.objectiveData.score || props.objectiveData.todayScore,
    },
  ];

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
export default ObjectiveChart;
