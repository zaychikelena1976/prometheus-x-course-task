import PropTypes from "prop-types";
import BookCard from "./bookCard";
import { default as db } from "../db/books.json";

export default function BooksList({ setBooks, onClick }) {
  const dataBooks = db.books;

  return (
    <ul className="row pt-4 pb-4 bg-info">
      {dataBooks.map((item) => (
        <li className="col-xs-12 col-md-4 col-sm-12" key={item.id}>
          <BookCard book={item.id} {...item} onClick={() => onClick(item.id)} />
          ;
        </li>
      ))}
    </ul>
  );
}

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//     })
//   ),
//   onClick: PropTypes.func.isRequired,
// };
