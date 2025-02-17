import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import SupportModal from "../SupportModal/SupportModal";

const Navbar = () => {
  const [openSupport, setOpenSupport] = useState(false);
  const [menuSelect, setMenuSelect] = useState("Inicio");

  return (
    <div>
      <header className="headerNavbar">
        <nav>
          <a href="#">
            <img src={assets.logo} alt="logo" className="logo" />
          </a>
          <div className="mobileMenu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul>
            <li>
              <a href="#">Sobre nos</a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Evita que a página recarregue
                  setOpenSupport(true);
                }}
              >
                Suporte
              </a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      {openSupport && (
        <SupportModal
          setOpenSupport={setOpenSupport}
          onClose={() => setOpenSupport(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
