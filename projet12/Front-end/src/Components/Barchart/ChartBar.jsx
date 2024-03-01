import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartBar = (props) => {
  console.log("ChartBarProps", props);
  if (!props.userActivity) {
    return <div>Aucune donnée d'activité utilisateur trouvée.</div>;
  }

  const { userActivity } = props;

  const data = userActivity.sessions.map((session, index) => ({
    index,
    name: session.day,
    uv: session.kilogram,
    pv: session.calories,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={7000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#282D30"
          activeBar={<Rectangle fill="#282D30" stroke="black" />}
        />
        <Bar
          dataKey="uv"
          fill="#E60000"
          activeBar={<Rectangle fill="#E60000" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
