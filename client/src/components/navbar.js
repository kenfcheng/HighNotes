import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import { logo } from "../pages/kbLogo.png";
import styles from "../style/navbar.css";

const Navbar = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post("/api/users/logout")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace("/login");
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <Link to="/" className="btn btn-link text-secondary">
        <img src={logo} alt="Home" className={styles.photo} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse flex flex-auto flex-wrap p-14"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {state.user ? (
            <li className="nav-item active">
              <Link
                to="#"
                className="btn btn-link text-secondary"
                onClick={logout}
              >
                <span className="text-secondary">logout</span>
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
