import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../assets/css/AvgSessionsChart.css";

/**
 * @typedef {Object} SessionData
 * @property {number} day - Le jour de la session.
 * @property {number} sessionLength - La durée de la session.
 */

/**
 * @typedef {Object} AvgSessionsChartProps
 * @property {SessionData[]} data - Les données des sessions.
 */

export default class AvgSessionsChart extends PureComponent {
  /**
   * @param {AvgSessionsChartProps} props - Les props pour le composant.
   */
  render() {
    const { data } = this.props;

    if (!data || data.length === 0) {
      return <div>Aucune donnée d'activité utilisateur trouvée.</div>;
    }

    const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];
    const datas = data.map((session) => ({
      day: dayLetters[session.day - 1],
      sessionLength: session.sessionLength,
    }));

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload) {
        return (
          <div className="lineChart_tooltip">{`${payload[0].value} min`}</div>
        );
      }
      return null;
    };

    const showOverlay = (e) => {
      let overlay = document.querySelector(".lineChart_overlay");

      if (e.isTooltipActive) {
        let windowWidth = overlay.offsetWidth;
        let mouseXpercent = Math.floor(
          (e.activeCoordinate.x / windowWidth) * 100
        );

        overlay.style.background = `linear-gradient(to right, rgb(255,0,0) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%`;
      } else {
        overlay.style.background = "transparent";
      }
    };

    const hideOverlay = () => {
      let overlay = document.querySelector(".lineChart_overlay");
      overlay.style.background = "transparent";
    };

    return (
      <ResponsiveContainer width="100%" height="100%" className="lineChart">
        <div className="lineChart_overlay"></div>
        <LineChart
          data={datas}
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          onMouseMove={showOverlay}
          onMouseOut={hideOverlay}
        >
          <text
            x={20}
            y={20}
            fill="#ffffff"
            opacity={0.5}
            fontWeight={500}
            textAnchor="left"
            dominantBaseline="central"
            className="AvgSessionschart-title"
          >
            <tspan>Durée moyenne des</tspan>
            <tspan x={20} dy="1.2em">
              sessions
            </tspan>
          </text>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF", fillOpacity: "50%" }}
            tickFormatter={(day) => day}
          />
          <YAxis hide={true} domain={["dataMin - 20", "dataMax + 40"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FBFBFB"
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.3)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

// Définition des types des props avec PropTypes
AvgSessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};
