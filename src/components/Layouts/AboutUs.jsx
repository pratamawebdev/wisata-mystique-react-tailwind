import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AboutImage } from "../../utils/data";

const AboutUs = () => {
  return (
    <section className="transition-all about section duration-400 dark:bg-gray-900">
      <div className="container grid gap-12 about__container xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-5xl">
        <div className="about__data">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title section-title">Explore world with us</h1>
          <p className="pb-8 about__text section-text 2xl:max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            veniam nostrum numquam ipsa laboriosam eveniet voluptatum illo
            corrupti impedit ex sit.
          </p>
          <Link to="/" className="inline-flex about__button button">
            Get Started
            <RiArrowRightLine className="text-[1.3rem]" />
          </Link>
        </div>

        <img src={AboutImage} alt="about img" className="about__img" />
      </div>
    </section>
  );
};

export default AboutUs;
