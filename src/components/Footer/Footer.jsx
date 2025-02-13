import { assets } from "../../assets/assets";
import "./Footer.css";

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
            <p>📞 (XX) XXXX-XXXX</p>
            <p>📱 WhatsApp: (XX) XXXXX-XXXX</p>
            <p>📧 contato@seudominio.com.br</p>
            <div className="footerSocial">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
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
