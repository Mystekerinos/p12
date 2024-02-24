import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {payload.map((entry, index) => (
          <p key={index}>{`${entry.value} ${entry.unit}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
