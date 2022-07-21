import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Projects from "../pages/projects";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<About/>} />
    </Routes>
  );
};

export default PageRoutes;
