import React from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const showNavHandler = ()=>{
    dispatch(displayAction.displayNav());}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg font sticky-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="/">
            Legends
            <i className="fa-solid fa-laptop ms-2"></i>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showNavHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse position-absolute  end-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fs-4"
                  aria-current="page"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4" href="/">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
