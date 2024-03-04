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

/**
 * A component to display performance data using a radar chart.
 * @param {object} props - The props object.
 * @param {object} props.performanceData - The performance data object containing data to be displayed.
 * @param {Array} props.performanceData.data - An array of performance data items.
 * @param {number} props.performanceData.data[].kind - The kind of performance data (1 for Intensity, 2 for Speed, etc.).
 * @param {number} props.performanceData.data[].value - The value of the performance data.
 * @returns {JSX.Element} The PerformanceChart React component.
 */

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
