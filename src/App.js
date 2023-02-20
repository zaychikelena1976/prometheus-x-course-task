import { React, useEffect, useState } from "react";
import {  toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import ContainerLayout from "./pages/containerLayout";
import { default as db } from "./db/books.json";
import UserBar from "./pages/signin/signin";
import { BooksProvider, CartProvider} from "./hooks";
import {  
  SpecificBook,
  BookList,
  Basket,
  BasketBook,
  NotFoundView,
} from "./pages";
import {  Header, Footer, CartBar } from "./components";


export default function App() {
  const dataBooks = db.books;
  const [specificBook, setSpecificBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);
  
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [sending, setSending] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(bookToBeAdded) {
    const bookDuplication = cart.filter((obj) => obj.id === bookToBeAdded.id);

    if (bookDuplication.length > 0) {
      toast.error("This item is already in the cart!");
      return;
    }

    setCart([...cart, bookToBeAdded]);
  }
  return (
    <ContainerLayout>
      <Header />;
      
      <BooksProvider value={books}>
        <Routes>
          <Route
            path="/books"
            element={<BookList onClick={setSpecificBook} />}
          />
          <Route
            path="books/:id"
            element={<SpecificBook bookId={specificBook} />}
          />

          <Route path="/signin" element={<UserBar onClick={null} />} />

          <Route
            path="/cart"
            element={
              <CartProvider value={cart}>
                <Basket
                  sending={sending}
                  //  changeSelectCount={changeCount}
                  //  onDeleteBook={removeFromCart}
                  //  onSubmit={submitCart}
                />
              </CartProvider>
            }
          />
          <Route
            path="*"
            element={<NotFoundView message="Page not found :(" />}
          />
        </Routes>
        <Footer />
      </BooksProvider>
    </ContainerLayout>
  );
}
