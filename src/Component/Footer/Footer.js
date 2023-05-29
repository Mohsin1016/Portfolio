import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="py-5 mt-5 text-light back px-3">
        <div className="container">
          <h1>Contact me :</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Text
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-info">
              SignUp
            </button>
          </form>
          <div>
            <img
              src="./images/G1.png"
              alt=""
              className="zse mx-4 shadow scale-hover bg-light my-4"
            />
            <span>or text me at :</span> <br />
            <a href="/" className="text-light text-decoration-none ms-4">
              Muhammadmohsin1016@gmail.com
            </a>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <p>© 2023 Company, Inc. All rights reserved.</p>{" "}
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis text-dark" href="/">
                <i className="fa-brands fa-facebook fa-lg"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis text-dark" href="/">
                <i className="fa-brands fa-twitter fa-lg"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis text-dark" href="/">
                <i className="fa-brands fa-instagram fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
