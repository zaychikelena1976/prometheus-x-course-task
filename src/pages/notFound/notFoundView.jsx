import "./NotFoundView.module.css";
import imageNotFound from "./imageNotFound.png";
export default function NotFoundView() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-body">
          <img className="notFound  " src={imageNotFound} alt="not found" />
        </div>
      </div>
    </>
  );
}
