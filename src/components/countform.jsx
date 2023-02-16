import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function CountForm({ value, price, setCount }) {
  function handleChange(event) {
    if (event.target.value > 0 && event.target.value <= 42) {
      setCount(Number(event.target.value));
    } else {
      toast.error("Please enter a value between 0 and 43!");
    }
  }
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice((Number(price) * Number(value)).toFixed(2));
  }, [value, price]);

  return (
    <>
      <div className="row">
        <div className="col-xs-10 col-md-10 col-sm-10 border-2 ">
          <p className="fw-bold">Price</p>
        </div>
        <div className="col-xs-2 col-md-2 col-sm-2 border-2">
          <p className="fw-bold">
            <span className="price">{price}</span>$
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-9 col-md-9 col-sm-9 ">
          <label className="label" htmlFor="number">
            Count
          </label>
        </div>
        <div className="col-xs-3 col-md-3 col-sm-3 ">
          <input
            className="book-quantity form-control max-width:100px"
            type="number"
            id="count"
            name="count"
            value={value}
            min="1"
            max="42"
            setCount={setCount}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-md-10 col-sm-10">
          <p className="fw-bold">Total price:</p>
        </div>
        <div className="col-xs-2 col-md-2 col-sm-2 border-2">
          <p className="fw-bold">
            <span className="total">{totalPrice}</span>$
          </p>
        </div>
      </div>
    </>
  );
}

CountForm.propTypes = {
  value: PropTypes.number.isRequired,
  price: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  styles: PropTypes.shape({
    formStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    spanStyle: PropTypes.string,
  }),
  setCount: PropTypes.func.isRequired,
};
