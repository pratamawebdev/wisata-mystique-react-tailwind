import React from "react";
import Navbar from "../components/Fragments/Navbar";
import Hero from "../components/Layouts/Hero";
import AboutUs from "../components/Layouts/AboutUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
};

export default HomePage;
