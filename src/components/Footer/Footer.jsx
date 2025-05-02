import { assets } from "../../assets/assets";
import "./Footer.css";
import { MdOutlinePhone } from "react-icons/md";
import { RiSmartphoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerLogo">
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="footerNavigation">
            <nav>
              <h4 className="navigationTitle">NAVEGAÇÃO</h4>
              <ul>
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Sobre nos</a>
                </li>
                <li>
                  <a href="#">Suporte</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footerContact">
            <h4 className="customerSupportTitle">ATENDIMENTO</h4>
            <p>
              <MdOutlinePhone /> (64) 3631-6296
            </p>
            <p>
              <RiSmartphoneFill />
              WhatsApp: (64) 3631-6296
            </p>
            <p>
              <MdEmail /> contato@primetecnologiajatai.com.br
            </p>
            <div className="footerSocial">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footerCopy">
          <p>© Prime Tecnologia 2013 - 2025. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
