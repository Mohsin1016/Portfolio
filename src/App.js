import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Container from "./Component/Container/Container";
import About from "./Component/About/About";
import Project1 from "./Component/Projects/Project1";
import Project2 from "./Component/Projects/Project2";
import "./App.css";
import ResNavbar from "./Component/Navbar/ResNavbar";
import { useSelector } from "react-redux";
import Apro from "./Component/Projects/Apro";

const App = () => {
  const showNav = useSelector((state) => state.display.display);
  return (
    <>
      {showNav && <ResNavbar />}
      {!showNav && (
        <>
          <Navbar />
          <Container />
          <About />
          <Apro/>
          <Project1 />
          <Project2 />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
