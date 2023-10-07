import { Link } from "react-router-dom";

import { RiArrowRightLine } from "react-icons/ri";

const ContactUs = () => {
  return (
    <section className="pt-24 transition-all callback duration-400 dark:bg-gray-900">
      <div className="callback__wrapper relative flex h-[640px] items-center">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="callback img"
          className="absolute top-0 left-0 object-cover object-center w-full h-full callback__img"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30" />

        <div className="container callback__container">
          <div className="relative text-center callback__data xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <p className="text-white callback__subtitle section-subtitle">
              Let's talk
            </p>
            <h1 className="text-white callback__title section-title">
              Contact us if you're ready
            </h1>
            <p className="pb-8 text-white callback__text section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              itaque eaque cumque libero dignissimos aut maiores odit commodi
              aspernatur expedita.
            </p>
            <Link to="/contact" className="inline-flex callback__button button">
              Contact us
              <RiArrowRightLine className="text-[1.3rem] text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
