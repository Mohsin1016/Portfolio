import React from "react";
import "./Project1.css";
const Project1 = () => {
  return (
    <div className="container shadow my-5 p-4 rounded ground">
      <div className="row">
        <div className="col-md-6 ">
          <img src="./images/pic1.jpg" alt="" className=" rounded img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>Blog Post Website</h1>
          <p className="fs-3">
            My blog post website is more than just a digital portfolio; it is a
            space where I can express my thoughts, engage with a community of
            like-minded individuals, and contribute to meaningful discussions. I
            invite you to visit my website and explore the diverse topics,
            engage in discussions, and join me on this exciting journey of
            sharing knowledge, experiences, and perspectives with the world.
            Thank you for your support, and I look forward to connecting with
            you through my blog!
          </p>
          <div className="d-flex justify-content-center my-4">
            <img
              src="./images/r1.png"
              alt=""
              className="iz ms-4 shadow scale-hover bg-light"
            />
            <img
              src="./images/c1.png"
              alt=""
              className="iz ms-5 shadow scale-hover bg-light"
            />
          </div>
          <div className="d-flex justify-content-center my-4">
            <a href="https://github.com/Mohsin1016">
              <i className="fa-brands fa-github fa-2xl fs-1 ms-4 scale-hover"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project1;
