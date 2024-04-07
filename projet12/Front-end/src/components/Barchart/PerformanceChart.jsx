import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * A component to display performance data using a radar chart.
 * @param {object} props - The props object.
 * @param {Array} props.data - An array of performance data items.
 * @param {number} props.data[].kind - The kind of performance data (1 for Intensity, 2 for Speed, etc.).
 * @param {number} props.data[].value - The value of the performance data.
 * @returns {JSX.Element} The PerformanceChart React component.
 */

const PerformanceChart = (props) => {
  const { data } = props;

  if (!data) {
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

  const datas = data.map((item) => ({
    subject: kindMapping[item.kind],
    A: item.value,
    B: 100,
    fullMark: 150,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={() => null} />
        <Radar
          dataKey="A"
          stroke="transparent"
          fill="#FF0101B2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceChart;
