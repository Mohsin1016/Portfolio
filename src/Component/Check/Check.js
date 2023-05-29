import React from "react";
import './Check.css';
const Check = () => {
  return (
    <div className="cntainer">
      <button className="btn">
        <span className="btn-text">Hover Me</span>
      </button>
      <button className="btn rounded">
        <span className="text-green">Hover Me</span>
      </button>
    </div>
  );
};
export default Check;
