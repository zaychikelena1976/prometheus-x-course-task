import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, disabled, children }) {
  console.log(children);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="btn-sm btn-warning border rounded text-center"
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  onClick: () => null,
  disabled: false,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
