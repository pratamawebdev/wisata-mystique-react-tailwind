import { Link } from "react-router-dom";

// import icons
import {
  RiInstagramFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiFacebookFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="pt-24 pb-8 bg-white footer dark:bg-gray-900">
      <div className="container grid gap-24 footer__container 2xl:mx-auto 2xl:max-w-5xl">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] items-start gap-12 lg:flex lg:justify-between lg:justify-items-center">
          <div className="footer__content">
            <Link
              to="/"
              className="footer__content-logo font-serif text-[20px] font-semibold text-black dark:text-white"
            >
              Wisata Mystique.
            </Link>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-white">
              Learn More
            </h3>

            <ul className="flex flex-col gap-2 footer__content-list">
              {[
                ["About", "/about"],
                ["Press release", "/press-release"],
                ["Environment", "/environment"],
                ["Privacy policy", "/privacy-policy"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link text-[15px] text-white hover:text-blue-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-white">
              Ticket & Booking
            </h3>

            <ul className="flex flex-col gap-2 footer__content-list">
              {[
                ["Lift tickets", "/lift-tickets"],
                ["Season passes", "/season-passes"],
                ["Vacations package", "/vacations-package"],
                ["Best trips", "/best-trips"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link text-[15px] text-white hover:text-blue-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-white">
              Socials
            </h3>

            <ul className="flex items-center gap-4 footer__content-socials w-max">
              <li>
                <Link
                  to="/"
                  className="footer__content-icon inline-flex text-[1.3rem] text-white hover:text-blue-600"
                >
                  <RiInstagramFill />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="footer__content-icon inline-flex text-[1.3rem] text-white hover:text-blue-600"
                >
                  <RiYoutubeFill />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className=" inline-flex text-[1.3rem] text-white hover:text-blue-600"
                >
                  <RiTwitterFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copy border-t-2 border-white/10 pt-8 text-center text-[15px] text-white">
          Copyrights 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
