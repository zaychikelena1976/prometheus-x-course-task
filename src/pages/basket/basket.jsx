import "./styles.css";
import React from "react";

export default function Basket() {
  return (
    <>
      <div className="wrapper">
        <div className="row">
          <div className="col-xs-5 col-md-5 col-sm-5 "></div>
          <div className="col-xs-5 col-md-5 col-sm-5 "></div>
          <div className="col-xs-2 col-md-2 col-sm-2 border-2 text-end">
            
          </div>
          <div className="col-xs-4 col-md-4 col-sm-4"></div>
          <div className="col-xs-4 col-md-4 col-sm-4">
            <p className="text">Your cart is empty...</p>
          </div>
        </div>
      </div>
    </>
  );
}
