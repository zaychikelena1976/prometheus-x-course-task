import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCart } from "../hooks/useCart";
import CartList from "./CartList";
import Button from "./button";
import cartEmpty from "./cartEmpty.png";

export default function CartBar({
  bookId,
  cart,
  sending,
  changeSelectCount,
  onDeleteBook,
  onSubmit,
}) {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      cart.reduce((acc, obj) => acc + obj.count * obj.price, 0).toFixed(2)
    );
  }, [cart]);

  return (
    <div>
      {!sending && cart.length > 0 ? (
        <>
          <CartList
            cart={cart}
            changeSelectCount={changeSelectCount}
            onDeleteBook={onDeleteBook}
          />

          <div>
            <p>Total cost: ${totalCost}</p>

            <Button type="button" onClick={() => onSubmit(Number(totalCost))}>
              Purchase
            </Button>
          </div>
        </>
      ) : sending ? (
        alert("Your order has been sent for processing")
      ) : (
        <div>
          title="Your cart is empty"
          <img src={cartEmpty} alt="Empty cart" />
        </div>
      )}
    </div>
  );
}

CartBar.propTypes = {
  sending: PropTypes.bool.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
