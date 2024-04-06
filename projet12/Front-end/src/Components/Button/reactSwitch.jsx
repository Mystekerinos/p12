import React from "react";
import Switch from "react-switch";
import PropTypes from "prop-types";

/**
 * Composant React représentant un interrupteur.
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.checked - État de l'interrupteur (activé ou désactivé).
 * @param {Function} props.onChange - Fonction appelée lorsqu'il y a un changement d'état.
 * @returns {JSX.Element} Composant React représentant un interrupteur.
 */
const ReactSwitch = ({ checked, onChange }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      onColor="#86d3ff"
      offColor="#ccc"
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};
ReactSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ReactSwitch;
