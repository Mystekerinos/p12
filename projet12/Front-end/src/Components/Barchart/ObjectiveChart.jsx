import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
/**
 * A component to display objective data using a pie chart.
 * @param {object} props - The props object.
 * @param {object} props.data - The objective data object containing the score information.
 * @param {number} props.data.score - The overall score.
 * @param {number} props.data.todayScore - The score achieved today.
 * @returns {JSX.Element} The ObjectiveChart React component.
 */

const ObjectiveChart = (props) => {
  const datas = [
    {
      name: "Group A",
      value: props.data.score || props.data.todayScore,
      fill: "#E60000",
    },
    {
      name: "Group B",
      value: 1 - props.data.score || 1 - props.data.todayScore,
      fill: "#FFFFFF",
    },
  ];

  const scorePercentage = datas[0].value * 100;

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
          data={datas}
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

ObjectiveChart.propTypes = {
  data: PropTypes.shape({
    score: PropTypes.number,
    todayScore: PropTypes.number,
  }).isRequired,
};
export default ObjectiveChart;
