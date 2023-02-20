import { useState } from "react";
import BooksList from "../../components/booksList";
import searchIcon from "./searchIcon.png";
import { useBooks } from "../../hooks";

export default function BookList({ setBooks, onClick, book, bookId }) {
  const books = useBooks();
  const [filterParam, setFilterParam] = useState("All prices");
  const [searchByName, setSearchByName] = useState("");
  function handleNameClick() {
    const visibleBooks = books.map((book) => ({
      ...book,
      title: book.title.toLowerCase(),
    }));
  }
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
                  onClick={handleNameClick}
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
          <select
            className="form-select form-select-sm text-centr"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option value="All prices">All prices</option>
            <option value="0<price<15">0...15</option>
            <option value="15<price<30">15...30</option>
            <option value="more 30">more then 30</option>
          </select>
        </div>
      </div>

      <BooksList onClick={onClick} />
    </>
  );
}
