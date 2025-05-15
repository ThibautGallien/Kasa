import { Routes, Route } from "react-router-dom";

// Pages principales
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error404 from "../pages/error";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
