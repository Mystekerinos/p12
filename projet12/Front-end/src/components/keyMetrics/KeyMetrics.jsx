import React from "react";
import "../../assets/css/KeyMetrics.css";
import PropTypes from "prop-types";
/**
 * Reusable component to display key information.
 * @param {string} icon The URL of the icon to display.
 * @param {string|number} value The value to display.
 * @param {string} name The name or title associated with the value.
 * @returns {JSX.Element|null} The KeyMetrics React component or null if required props are not provided.
 */

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
// Déclaration des types de props
KeyMetrics.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
};
export default KeyMetrics;
