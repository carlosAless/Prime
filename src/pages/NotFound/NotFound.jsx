import "./NotFound.css";
import { assets } from "../../assets/assets";

export const NotFound = () => {
  return (
    <main className="NotFound">
      <img src={assets.notfound} alt="notfound" />
      <h1 id="titleNotFound">Página não encontrada!</h1>
    </main>
  );
};
