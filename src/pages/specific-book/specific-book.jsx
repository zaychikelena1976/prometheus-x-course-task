import React from "react";
import { useState, useEffect } from "react";
import { useBooks } from "../../hooks/useBooks";
import { default as db } from "../../db/books.json";
import Button from "../../components/button";
import BookBlank from "../../components/bookBlank";
import CountForm from "../../components/countform";
import BookImage from "../../components/bookImage";
import BookDescription from "../../components/bookDescription";
import { ToastContainer, toast } from "react-toastify";

export default function SpecificBook({ bookId, addToCart }) {
  const [book, setBook] = useState({});
  const books = useBooks();
  const dataBooks = db.books;
  // const book = dataBooks.map((item) => item.id);
  const Book = dataBooks.filter((item) => item.id === bookId)[0];
  console.log(Book);
  const { id, author, price, image, title } = Book;
  const [count, setCount] = useState({});
  Book.count = dataBooks.count;
  
  function handleChange(event) {
    if (event.target.value > 0 && event.target.value <= 42) {
      setCount(Number(event.target.value));
    } else {
      toast.error("Please enter a value between 0 and 43!");
    }
  }
  // const [cart,setCart]=useState({});
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // const savedBook = book.filter((book) => book.id === bookId)[0];
  return (
    <>
      <div className="row bg-info pt-4">
        <div className="col-xs-12 col-md-3 col-sm-12 bg-info">
          <BookImage image={Book.image} title={Book.title} />
        </div>

        <BookBlank title={Book.title} author={Book.author} />

        <div className="col-xs-12 col-md-4 col-sm-12 border-2 px-0 mx-0">
          <div className="container  border border-secondary pt-2 pb-2 m-4">
            <CountForm
              price={Book.price}
              value={count}
              min={1}
              max={42}
              setCount={setCount}
              onChange={handleChange}
            />

            <div className="col-xs-6 col-md-6 col-sm-6"></div>
            <div className="col-xs-6 col-md-6 col-sm-6 border-2 text-end">
              <Button
                type="button"
                title="Signing out of your account"
                onClick={() =>setCart({Book})}
                // onChange={(e) =>  addToCart({ ...book, count: Number(count) })}
                //  addToCart({ ...book, count: Number(count) })}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row bg-info">
        <div className="col-xs-12 col-md-12 col-sm-12">
          <BookDescription description={Book.description} />
        </div>
      </div>
    </>
  );
}
