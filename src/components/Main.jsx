import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
