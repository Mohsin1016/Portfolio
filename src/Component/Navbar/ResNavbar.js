import React from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
const ResNavbar = () => {
  const dispatch = useDispatch();
  const showNavHandler = () => {
    dispatch(displayAction.displayNav());
  };
  return (
    <>
      <div className="container ">
        <div className="row mt-3">
          <div className="col-sm-6">
            <a className="navbar-brand fs-3" href="/">
              Legends
              <i className="fa-solid fa-laptop ms-2"></i>
            </a>
          </div>
          <div className="col-sm-6 text-end">
            <i className="fa-solid fa-xmark" onClick={showNavHandler}></i>
          </div>
        </div>
        <div className="row"></div>
        <ul className="list-unstyled list-inline">
          <li>
            <a href="/" className="nav-link">
              Media
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Investors
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ResNavbar;
