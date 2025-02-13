import React from "react";
import ParticlesInDiv from "../../assets/ParticlesInDiv";
import { ReactTyped } from "react-typed";

import "./Header.css";

const Header = () => {
  return (
    <div className="hero">
      <ParticlesInDiv />

      <h1>
        Prime trazendo soluções em T.I para a sua{" "}
        <span className="typed-text">
          <ReactTyped
            strings={["CASA", "EMPRESA", "EQUIPE", "INFRAESTRUTURA"]}
            typeSpeed={150}
            backSpeed={50}
            loop
          />
        </span>
      </h1>

      <img
        src="https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif"
        style={{ width: "100px", marginTop: "100px" }}
        alt=""
      />
    </div>
  );
};

export default Header;
