import React from "react";
import SpecificBook from "./specific-book/specific-book";
export default function BasketBook() {
  return (
    <>
      <div className="row bg-info">
        <div className="col-xs-6 col-md-6 col-sm-6 border-2 text-end"></div>
        <div className="col-xs-6 col-md-6 col-sm-6 border-2 text-end">
          <button
            className="btn-sm btn-warning border rounded text-center"
            type="button"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="row pt-10 bg-info pt-5">
        <div className="col-xs-12 col-md-12 col-sm-12 bg-info border border-secondary">
          <SpecificBook />
        </div>
        <div className="col-xs-12 col-md-12 col-sm-12 bg-info border border-secondary">
          <p>Book name Count Total price</p>
        </div>
        <div className="col-xs-12 col-md-12 col-sm-12 bg-info border border-secondary">
          <p>hjjk</p>
        </div>
      </div>
    </>
  );
}
