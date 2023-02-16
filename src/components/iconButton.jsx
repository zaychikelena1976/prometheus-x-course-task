import React from "react";
import PropTypes from "prop-types";

export default function IconButton({
  children,
  type,
  title,
  onClick,
  ...allProps
}) {
  // console.log(children);

  return (
    <button
      className="btn btn-primary btn-lg "
      type={type}
      title={title}
      onClick={onClick}
      {...allProps}
    >
      {children}
    </button>
  );
}
IconButton.defaultProps = {
  children: null,
  title: null,
  onClick: () => null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
