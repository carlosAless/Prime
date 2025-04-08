import { useState } from "react";
import { assets } from "../../assets/assets";
import { IoMenu, IoClose } from "react-icons/io5";

import "./Navbar.css";
import SupportModal from "../SupportModal/SupportModal";

const Navbar = () => {
  const [openSupport, setOpenSupport] = useState(false);
  const [menuSelect, setMenuSelect] = useState("Inicio");
  const [navMenuBool, setnavMenuBool] = useState(false);

  return (
    <div className="navbarContainer">
      <header className="headerNavbar">
        <a href="#">
          <img src={assets.logo} alt="logo" className="logo" />
        </a>
        <nav className={`navMenu ${navMenuBool ? "open" : ""}`}>
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

        <div
          className="mobileMenu"
          onClick={() => setnavMenuBool(!navMenuBool)}
        >
          {navMenuBool ? (
            <IoClose size={30} color="black" />
          ) : (
            <IoMenu size={30} color="black" />
          )}
        </div>
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
