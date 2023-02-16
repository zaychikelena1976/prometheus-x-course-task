import "./header.css";
import avatar from "./avatar.png";
import basket from "./basket.svg";
import { NavLink, Link } from "react-router-dom";
import useUser from "../hooks";

export default function Header({ user, setUser }) {
  const setActiv = ({ isActive }) => (isActive ? "activ-link" : "");

  return (
    <header>
      <nav className="row navbar navbar-expand-sm  border border-secondary bg-warning ">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            aria-current="page"
            href="https://courses.prometheus.org.ua/"
          >
            <b>JS BAND STORY/Olena Lomonos</b>
          </a>

          {/* <div className="nav navbar-nav navbar-right"> */}

          {user != {} ? (
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="nav navbar-nav navbar-right">
                <NavLink to="/cart" className={setActiv}>
                  <img src={basket} width="40" height="40" alt="cartimage" />
                </NavLink>
                <NavLink to="/signin" className={setActiv}>
                  <button
                    className="btn-dark btn-sm rounded-3 hidden"
                    type="button"
                    // onClick={() => (user = {})}
                  >
                    {/* {()=>{localStorage.clear()}} */} Sign-Out
                  </button>
                </NavLink>
                <img src={avatar} alt="customer" width="40" height="40" />
                <span>User</span>
              </div>
            </div>
          ) : (
            {
              /* <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="nav navbar-nav navbar-right">
                <NavLink to="/signin">
                  <button
                    className="btn-dark btn-sm rounded-3 hidden"
                    type="button"
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Sign-Out
                  </button>
                </NavLink>
              </div>
            </div> */
            }
          )}
        </div>
      </nav>
    </header>
  );
}
