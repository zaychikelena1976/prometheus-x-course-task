import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CountForm from "./countform";
import Button from "./button";
import NotFound from "./NotFound.png";

export default function SelectedBook({
  Book,
  changeSelectCount,
  onDeleteBook,
  bookId,
}) {
  const selectedBook = Book;
   const{image,title,price,count}=selectedBook;
  console.log(selectedBook);
  return (
    <article>
      <div>
         <img
          src={
            selectedBook.image && selectedBook.image !== ""
              ? selectedBook.image
              : { NotFound }
          }
          alt={selectedBook.title}
        />

        <h3>{selectedBook.title}</h3>
      </div>

      <div>
        <p>Price: ${selectedBook.price}</p>

        <CountForm
          value={selectedBook.count}
          price={selectedBook.price}
          min={1}
          max={42}
          setCount={(count) => changeSelectCount({ count, bookId })}
        /> 

        <Button type="button" onClick={onDeleteBook}>
          Delete
        </Button>
      </div>
    </article>
  );
}

SelectedBook.propTypes = {
  selectedBook: PropTypes.object.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};
