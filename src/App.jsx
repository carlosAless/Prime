import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound"; // Remova as chaves se for export default

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Esta deve ser SEMPRE a última rota */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
