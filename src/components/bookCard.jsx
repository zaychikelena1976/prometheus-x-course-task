import { React } from "react";
import PropTypes from "prop-types";
import Button from "./button";
import { default as db } from "../db/books.json";
import { Link } from "react-router-dom";
import NotFound from "./NotFound.png";

export default function BookCard({ title, id, author, price, image, onClick }) {
  const dataBooks = db.books;

  return (
    <>
      <img
        className="card-img-top  px-4 "
        src={image && image !== "" ? image : NotFound}
        alt="Card "
          max-width='203'
          max-heght='328'
        // width="259"
        // height="340"
      />
      <div className="card-body">
        <h4 className="card-title">
          <span style={{ fontSize: 18, fontWeight: 500 }}>Book name:</span>
          {title}
        </h4>
        <p className="card-text">
          <span style={{ fontSize: 18, fontWeight: 500 }}>Book author:</span>
          {author}
        </p>
        <p className="card-text">
          <span style={{ fontSize: 18, fontWeight: 500 }}>Price:</span>
          {price}
          <span>$</span>
        </p>
      </div>

      <Button type="button" title="More about the book">
        <Link to={`/books/:${id}`} onClick={onClick}>
          View
        </Link>
      </Button>
    </>
  );
}

BookCard.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
