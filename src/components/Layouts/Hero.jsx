import React from "react";
import BannerSlider from "../Fragments/BannerSlider";

const Hero = () => {
  return (
    <section className="h-screen pb-16 transition-all hero duration-400 dark:bg-gray-900">
      <BannerSlider />
    </section>
  );
};

export default Hero;
