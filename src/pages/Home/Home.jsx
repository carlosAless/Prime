import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Contact from "../../components/Contact/Contact";
import { About } from "../../components/About/About";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Header></Header>
      <main className="main">
        <div className="contentMain">
          <About></About>
          <Services></Services>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
