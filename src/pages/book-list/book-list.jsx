import BooksList from "../../components/booksList";
import IconButton from "../../components/iconButton";
import { default as db } from "../../db/books.json";
import imageNotFound from "./imageNotFound.png";

export default function BookList({ setBooks, onClick, book, bookId }) {
  const dataBooks = db.books;
  return (
    <>
      <div className="row bg-info ">
        <div className="col-xs-12 col-md-4 col-sm-12 bg-info">
          <form>
            <input
              // className="inputByName"
              type="text"
              id="text"
              name="searchByName"
              placeholder="Search by book name"
              //  value={searchByName}
              // onChange={e => setSearchByName(e.target.value)}
            />
            <IconButton
              type="button"
              title="Search by book name"
              // ariaLabel="Search by book name"
              // onClick={handleNameClick}
            ></IconButton>
          </form>
        </div>
        <div className="col-xs-12 col-md-4 col-sm-12 bg-info">
          <form>
            <select></select>
          </form>
        </div>
      </div>
      <BooksList onClick={onClick} />
    </>
  );
}
