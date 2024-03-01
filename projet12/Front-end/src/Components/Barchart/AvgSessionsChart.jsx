import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AvgSessionsChart = (props) => {
  console.log("AvgSessionsChart props:", props);

  if (!props.userAverageSessions || !props.userAverageSessions.sessions) {
    return <div>Aucune donnée d'activité utilisateur trouvée.</div>;
  }

  const { userAverageSessions } = props;
  console.log("AvgSessionsChart props6:", props);
  const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];

  const data = userAverageSessions.sessions.map((session, index) => ({
    name: dayLetters[index], // Assign day letters as x-axis labels
    uv: session.sessionLength,
  }));

  console.log("AvgSessionsChart data:", data);
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#FFFFFF"
            fill="#FF0000
"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AvgSessionsChart;
