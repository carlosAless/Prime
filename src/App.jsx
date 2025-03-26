import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="container">
      <Home></Home>
    </div>
  );
}

export default App;
