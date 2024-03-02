import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = (props) => {
  const { performanceData } = props;

  if (!performanceData) {
    return <div>Aucune donnée de performance trouvée.</div>;
  }

  const kindMapping = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  const data = performanceData.data.map((item) => ({
    subject: kindMapping[item.kind],
    A: item.value,
    B: 100,
    fullMark: 150,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={() => null} />
        <Radar
          dataKey="A"
          stroke="transparent"
          fill="#FF0101B2"
          fillOpacity={0.6}
        />
        <Legend wrapperStyle={{ color: "#000000" }} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
