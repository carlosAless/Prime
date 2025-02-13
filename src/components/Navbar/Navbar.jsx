import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
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
              <a
                href="#"
                className={menuSelect === "Inicio" ? "menuActive" : ""}
                onClick={() => setMenuSelect("Inicio")}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className={menuSelect === "Sobre" ? "menuActive" : ""}
                onClick={() => setMenuSelect("Sobre")}
              >
                Sobre nos
              </a>
            </li>
            <li>
              <a
                href="#"
                className={menuSelect === "Suporte" ? "menuActive" : ""}
                onClick={() => setMenuSelect("Suporte")}
              >
                Suporte
              </a>
            </li>
            <li>
              <a
                href="#"
                className={menuSelect === "Feedback" ? "menuActive" : ""}
                onClick={() => setMenuSelect("Feedback")}
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#"
                className={menuSelect === "Contato" ? "menuActive" : ""}
                onClick={() => setMenuSelect("Contato")}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
