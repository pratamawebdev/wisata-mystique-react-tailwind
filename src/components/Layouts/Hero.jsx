import React from "react";
import { Link } from "react-router-dom";
import { HeroImage } from "../../utils/data";

const Hero = () => {
  return (
    <section className="h-screen pb-16 transition-all hero duration-400 dark:bg-gray-900">
      <div className="relative flex items-center h-screen bg-pink-200 hero__wrapper">
        {/* hero img */}
        <img
          src={HeroImage}
          alt="hero img"
          className="hero__img absolute top-0 left-0 h-full w-full object-cover object-[60%]"
        />

        {/* hero overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30" />

        <div className="container relative hero__container">
          {/* hero data */}
          <div className="hero__data xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl">
            <h1 className="hero__title section-title text-white xs:text-[42px] sm:text-[48px] 2xl:text-[64px]">
              Explore new places <br />
              with Travello
            </h1>
            <p className="pb-8 text-white hero__text section-text xs:max-w-md xl:max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolore laboriosam necessitatibus eius perspiciatis debitis neque
              amet consectetur adipisicing elit.
            </p>
            <Link to="/" className="inline-flex hero__button button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
