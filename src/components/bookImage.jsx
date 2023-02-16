import React from "react";
import PropTypes from "prop-types";
import NotFound from "./NotFound.png";

export default function BookImage({ image, title }) {
  return (
    <div className="col-xs-12 col-md-3 col-sm-12 bg-info">
      <img
         className=" max-width=200px max-heght=200px"
        src={image !== "" ? image : NotFound}
        alt={title}
         width="259" height="340"
      />
    </div>
  );
}
BookImage.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
};
