import "./NotFound.css";
import { assets } from "../../assets/assets";
import ParticlesInDiv from "../../assets/ParticlesInDiv";

export const NotFound = () => {
  return (
    <main className="NotFound">
      <ParticlesInDiv></ParticlesInDiv>
      <img src={assets.notfound} alt="notfound" />
      <h1 id="titleNotFound">Página não encontrada!</h1>
    </main>
  );
};
