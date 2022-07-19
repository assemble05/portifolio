import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects";

const PageRoutes = () => {
  return (
    <Routes>
      Projects
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default PageRoutes;
