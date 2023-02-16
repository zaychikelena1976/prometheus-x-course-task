import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SelectedBook from "./SelectedBook";
export default function CartList({
  cart,
  changeSelectCount,
  onDeleteBook,
  Book,
}) {
 

    
  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          <SelectedBook
            selectedBook={item}
            changeSelectCount={changeSelectCount}
            onDeleteBook={() => onDeleteBook(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  // changeSelectCount: PropTypes.func.isRequired,
  // onDeleteBook: PropTypes.func.isRequired,
};
