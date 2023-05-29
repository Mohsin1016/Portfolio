import React from "react";
const Project2 = () => {
  return (
    <div className="container shadow my-5 rounded p-4 ground">
      <div className="row">
        <div className="col-md-6">
          <h1>Ecommerce Website</h1>
          <p className="fs-3">
            My e-commerce website is more than just an online shopping platform;
            it is a gateway to an extraordinary shopping experience. With a
            sleek design, diverse product range, personalized recommendations,
            secure transactions, and excellent customer support, I am committed
            to providing shoppers with a seamless and enjoyable journey. Join me
            on this e-commerce adventure, where convenience, variety, and
            quality converge to redefine the way we shop online.
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
        <div className="col-md-6">
          <img src="./images/pic1.jpg" alt="" className=" rounded img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default Project2;
