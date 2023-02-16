
export default function BasketRow({ id, title, price }) {
  return (
    <div className="row">
      <div className="col-xs-3 col-md-3 col-sm-3 bg-info border border-secondary">
        <p>Bookname:{title} </p>
      </div>
      <div className="col-xs-3 col-md-3 col-sm-3 bg-info border border-secondary">
        <p> Count:bookscount </p>
      </div>
      <div className="col-xs-3 col-md-3 col-sm-3 col-sm-4 bg-info border border-secondary">
        <p> Price:{price} </p>
      </div>
      <div className="col-xs-3 col-md-3 col-sm-3 bg-info border border-secondary">
        <p> </p>
      </div>
    </div>
  );
}