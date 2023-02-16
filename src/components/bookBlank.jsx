import PropTypes from "prop-types";

export default function BookBlank({
  book,
  id,
  title,
  author,
  description,
  onClick,
}) {
  return (
    <>
      <div className="col-xs-12 col-md-4 col-sm-12 text-left ">
        <div className="container">
          <p className="fw-bold fs-5">
            <span style={{ fontSize: 18, fontWeight: 500 }}>Book name: </span>
            {title}
          </p>
          <p>
            <span style={{ fontSize: 18, fontWeight: 500 }}>Book author: </span>
            {author}
          </p>
        </div>
      </div>
    </>
  );
}
BookBlank.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
