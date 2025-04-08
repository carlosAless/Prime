import React from "react";
import ParticlesInDiv from "../../assets/ParticlesInDiv";
import { ReactTyped } from "react-typed";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="hero">
      <ParticlesInDiv />

      {/* Conteúdo com z-index maior para ficar acima das partículas */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
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
          src={assets.scrollingMouse}
          style={{ width: "100px", marginTop: "100px" }}
          alt="Scroll indicator"
        />
      </div>
    </div>
  );
};

export default Header;
