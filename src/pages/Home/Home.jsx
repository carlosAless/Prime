import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Contact from "../../components/Contact/Contact";
import { About } from "../../components/About/About";
import Services from "../../components/services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Header></Header>

      <main className="main">
        <div className="contentMain">
          <About></About>
          <Services></Services>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </main>
      <a
        href="https://wa.me/556436316296?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20Prime."
        target="_blank"
        rel="noopener noreferrer"
        id="whatsappiconlink"
      >
        <img src={assets.whatsappicon} alt="WhatsApp" width="40" height="40" />
      </a>
    </div>
  );
};

export default Home;
