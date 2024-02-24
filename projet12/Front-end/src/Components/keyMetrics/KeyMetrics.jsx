// KeyMetrics.jsx
import React from "react";
import "./KeyMetrics.css";

const KeyMetrics = (props) => {
  if (!props || !props.icon || !props.value || !props.name) {
    return null;
  }

  return (
    <div className="keymetrics">
      <img className="keymetrics-icon" src={props.icon} alt="Keymetrics icon" />
      <div className="keymetrics-info">
        <p className="keymetrics-value">{props.value}</p>
        <p className="keymetrics-name">{props.name}</p>
      </div>
    </div>
  );
};

export default KeyMetrics;
