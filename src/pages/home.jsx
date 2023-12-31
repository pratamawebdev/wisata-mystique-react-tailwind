import Navbar from "../components/Fragments/Navbar";
import Hero from "../components/Layouts/Hero";
import AboutUs from "../components/Layouts/AboutUs";
import Footer from "../components/Layouts/Footer";
import Promos from "../components/Layouts/Promos";
import Activities from "../components/Layouts/Activities";
import ContactUs from "../components/Layouts/ContactUs";
import Category from "../components/Layouts/Category";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Category />
      <Promos />
      <Activities />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
