import React, { useState, useEffect } from 'react';
import "./Container.css";
const Container = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    setAnimationPlayed(true);
  }, []);

  return (
    <div className={`container my-5  ${animationPlayed ? 'slide-in' : ''}`}>
      <div className="row ">
        <div className="col-md-6 p-4">
          <img src="./images/p1.jpeg" alt="" className="Size img-fluid shadow scale-hover" />
        </div>
        <div className="col-md-6 justify-content-end">
          <p className="fs-1 my-2">Front-End React Developer</p>
          <p className="fs-3">
            hey i am Mohsin, A passionate Front-End react developer based in
            Lahore, Pakistan<i className="fa-solid fa-location-dot fa-lg ms-2"></i>
          </p>
          <a href="https://github.com/Mohsin1016"><i className="fa-brands fa-github fa-2xl my-4 scale-hover"></i></a>
          <p className="fs-1">Tech Stack:</p>
          <div className="mt-3">
          <img src="./images/h1.png" alt="" className="sz ms-3 shadow scale-hover" />
          <img src="./images/c1.png" alt="" className="sz ms-3 shadow scale-hover"/>
          <img src="./images/j1.png" alt="" className="sz ms-3 shadow scale-hover"/>
          <img src="./images/b1.png" alt="" className="sz ms-3 shadow scale-hover"/>
          <img src="./images/r1.png" alt="" className="sz ms-3 shadow scale-hover"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;
