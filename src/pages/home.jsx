import Navbar from "../components/Fragments/Navbar";
import Hero from "../components/Layouts/Hero";
import AboutUs from "../components/Layouts/AboutUs";
import Footer from "../components/Layouts/Footer";
import Promo from "../components/Layouts/Promo";
import Activities from "../components/Layouts/Activities";
import ContactUs from "../components/Layouts/ContactUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Promo />
      <Activities />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
