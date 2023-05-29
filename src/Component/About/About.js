import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="container shadow my-4 p-4 rounded back">
        <h1>About me</h1>
        <p className="fs-3">
          I am a beginner front-end developer and I am skilled in HTML, CSS and
          JavaScript web development, as well as the React framework.I am
          looking to gain valuable experience in an IT environment and expand my
          competence. I am ready for challenges and eager to learn and acquire
          new skills.
          <br />
          <br />
          I graduated from the Punjab Univeristy in Lahore with a degree in
          Electrical Engineering with a specialization in Computer Science in
          Electrical Engineering.
          <br />
          <br />
          Privately, in addition to developing web applications, I am interested
          in beekeeping (I have my own apiary), kayaking and off-roading.
        </p>
      </div>
      <div className="container my-5 p-4 shadow rounded back">
        <h1>Projects</h1>
        <p className="fs-3">
          Below you can see my projects, check out the live demos and code on
          GitHub
        </p>
      </div>
    </>
  );
};
export default About;
