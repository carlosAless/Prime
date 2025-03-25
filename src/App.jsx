import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound"; // Importe a página 404

function App() {
  return (
    <>
      <div className="container">
        <Home></Home>
      </div>
    </>
  );
}

export default App;
