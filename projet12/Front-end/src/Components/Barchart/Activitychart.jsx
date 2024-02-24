import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ActivityChart = ({ userData }) => {
  // Vérifiez d'abord si les données d'utilisateur sont disponibles et si la propriété 'sessions' est définie
  if (!userData || !userData.sessions) {
    // Si les données d'utilisateur ne sont pas disponibles, affichez un message d'erreur
    return <div>Aucune donnée d'utilisateur disponible</div>;
  }
  console.log("userData", userData);
  // Fonction pour générer les nombres de jour d'activité
  const activityDayNumbers = () => {
    // Utilisez la méthode map pour itérer sur les sessions et renvoyer un tableau de nombres de jour
    return userData.sessions.map((session, index) => index + 1);
  };

  // Fonction pour rendre le tooltip
  const renderTooltip = ({ active, payload }) => {
    // Vérifiez si le tooltip est actif et si les données du payload sont disponibles
    if (active && payload && payload.length) {
      // Si oui, affichez le tooltip avec les données du payload
      return (
        <div
          style={{
            background: "#E60000",
            color: "#FFFFFF",
            padding: "0.25em 0.5em",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          {/* Utilisez la méthode map pour itérer sur les données du payload et afficher chaque entrée */}
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{ margin: "1.25em 0" }}
            >{`${entry.value} ${entry.unit}`}</p>
          ))}
        </div>
      );
    }
  };

  // Rendu du composant
  return (
    <ResponsiveContainer width="90%" height="80%">
      <BarChart data={userData.sessions} barGap={12} barSize={8}>
        {/* Titre du graphique */}
        <text
          x={0}
          y={20}
          textAnchor="left"
          style={{ fontSize: "1.8rem", fontWeight: 500, fill: "#000000" }}
        >
          Activité quotidienne
        </text>

        {/* Grille cartésienne */}
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />

        {/* Axe X */}
        <XAxis
          dataKey={activityDayNumbers}
          tickLine={false}
          axisLine={{ stroke: "#DEDEDE" }}
          tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          dy={14}
        />

        {/* Axe Y pour le poids */}
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          stroke="#282D30"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          type="number"
          domain={["dataMin - 5", "auto"]}
          dx={14}
        />

        {/* Axe Y pour les calories */}
        <YAxis
          yAxisId="calories"
          orientation="left"
          stroke="#E60000"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          hide={true}
          domain={["dataMin - 50", "auto"]}
          dx={-16}
        />

        {/* Tooltip */}
        <Tooltip content={renderTooltip} />

        {/* Légende */}
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{ paddingBottom: "4em" }}
        />

        {/* Barre pour le poids */}
        <Bar
          yAxisId="kilogram"
          name="Poids (kg)"
          dataKey="kilogram"
          unit="kg"
          fill="#282D30"
          radius={[20, 20, 0, 0]}
        />

        {/* Barre pour les calories */}
        <Bar
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          unit="kCal"
          fill="#E60000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
