import { useState, useEffect } from "react";
import BooksList from "../../components/booksList";
import searchIcon from "./searchIcon.png";
import { default as db } from "../../db/books.json";
import { useBooks } from "../../hooks";

export default function BookList({ setBooks, onClick, book, bookId }) {
  const books = useBooks();
  const [searchByName, setSearchByName] = useState("");
  return (
    <>
      <div className="row bg-info ">
        <div className="col-xs-12 col-md-5 col-sm-12 bg-info">
          <div>
            <form className="row bg-info ">
              <div className="col-xs-12 col-md-6 col-sm-12 bg-info">
                <input
                  className="inputByName"
                  type="text"
                  id="text"
                  name="searchByName"
                  placeholder="Search by book name"
                  value={searchByName}
                  onChange={(e) => setSearchByName(e.target.value)}
                />
              </div>
              <div className="col-xs-6 col-md-1 col-sm-6">
                <button
                  className="btn-xs btn-dark "
                  type="button"
                  title="Search by book name"
                  // ariaLabel="Search by book name"
                  // onClick={handleNameClick}
                >
                  <img
                    src={searchIcon}
                    width="20"
                    height="20"
                    alt="cartimage"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 col-sm-12 bg-info">
          <select class="form-select form-select-sm text-centr" name="" id="">
            <option>All prices</option>
            <option>6.39</option>
            <option>6.99</option>
          </select>
        </div>
        <div className="col-xs-12 col-md-3 col-sm-12 bg-info">
          <form>
            <button type="button" title="Reset all filters">
              Reset filters
            </button>
          </form>
        </div>
      </div>

      <BooksList onClick={onClick} />
    </>
  );
}
