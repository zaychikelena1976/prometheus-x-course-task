import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import "./styles.css";
import avatar from "./avatar.png";

export default function UserBar() {
  const [name, setName] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div className="row pt-12 bg-info pt-5">
      <div className="col-xs-12 col-md-12 col-sm-12 bg-info text-center">
        <img
          className="user  border border-2  mx-auto"
          src={avatar}
          alt="user"
        />
      </div>
      <div className="col-xs-12 col-md-12 col-sm-12 bg-info text-center">
        <form>
          <div>
            <label className="control-lable  fs-5 fw-bold" htmlFor="Username">
              Username
            </label>
          </div>
          <input
            className=" width: 200px, text-center"
            type="text"
            name="Username"
            placeholder="type Username"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            minLength={4}
            maxLength={16}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            <button
              className="btn-warning btn-m rounded-3 m-3"
              type="submit"
              disabled={name.length < 6 || name.length > 16}
              onClick={() => setUser({ name })}
            >
              {name.length >= 5 && name.length < 16 ? (
                <Link to="/books">Sign-in</Link>
              ) : (
                <>Sign in</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
