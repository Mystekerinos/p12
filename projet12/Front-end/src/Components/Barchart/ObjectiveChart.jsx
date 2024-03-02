import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const ObjectiveChart = (props) => {
  console.log("ObjectiveChartprops", props);
  const data = [
    {
      name: "Group A",
      value: props.objectiveData.score || props.objectiveData.todayScore,
      fill: "#E60000",
    },
  ];
  console.log("data", data);
  const scorePercentage = data[0].value * 100;
  console.log("scorePercentage", scorePercentage);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <text
          x={20}
          y={30}
          textAnchor="left"
          style={{
            fontSize: "1.8rem",
            fontWeight: 500,
            fill: "#000000",
          }}
        >
          Score
        </text>
        <Pie
          data={data}
          dataKey="value"
          nameKey="score"
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="70%"
          cornerRadius="50%"
          startAngle={-270}
          endAngle={90}
        />
        <text
          x="50%"
          y="42%"
          textAnchor="middle"
          style={{ fill: "#282D30", fontSize: "2.6rem", fontWeight: "700" }}
        >
          {scorePercentage} %
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          style={{ fill: "#74798C", fontSize: "1.6rem", fontWeight: "500" }}
        >
          de votre
        </text>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          style={{ fill: "#74798C", fontSize: "1.6rem", fontWeight: "500" }}
        >
          objectif
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default ObjectiveChart;
