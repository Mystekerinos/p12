import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const ObjectiveChart = (props) => {
  // Vérifier si les données sont présentes
  if (!props.data) {
    return <div>Aucune donnée disponible pour afficher le graphique.</div>;
  }

  // Vérifier si le score est disponible dans les données, sinon utiliser todayScore
  const score =
    props.data.score !== undefined ? props.data.score : props.data.todayScore;

  // Vérifier si le score est un nombre valide
  if (isNaN(score)) {
    return <div>Le score n'est pas valide pour afficher le graphique.</div>;
  }

  // Convertir le score en pourcentage
  const scorePercentage = parseFloat(score) * 100;

  // Données pour le graphique en secteurs (PieChart)
  const data = [
    { value: scorePercentage, fill: "#E60000" },
    { value: 100 - scorePercentage, fill: "#FFFFFF" },
  ];

  return (
    <ResponsiveContainer width="90%" height="90%">
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
          {scorePercentage.toFixed(2)} %
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
