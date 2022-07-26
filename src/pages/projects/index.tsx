import db from "../../service";
import { UlWrapper } from "./ProjectsStyle";

import { Canvas } from "@react-three/fiber";
import { Cloud, Stars } from "@react-three/drei";
import { Suspense, useContext } from "react";
import { ThemeContext } from "styled-components";
import Header from "../../components/header";
import Project from "../../components/cardProject";

interface ObjectType {
  name: string;
  description: string;
  img: string;
  url: string;
  tecnologias : any
  repo : string | any
  has_repo : boolean
}
interface TypeProps {
  props?: any;
}

const Projects = ({ props }: TypeProps) => {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <Canvas style={{ width: "100%", height: "1500px" }}>
          <Suspense fallback={null}>
            {title === "dark" ? (
              <>
                <Stars
                  radius={40}
                  depth={20}
                  count={3000}
                  factor={4}
                  saturation={1}
                  fade
                />
                <Stars
                  radius={120}
                  depth={10}
                  count={5000}
                  factor={4}
                  saturation={1}
                  fade
                />
              </>
            ) : (
              <>
                <Stars
                  radius={80}
                  depth={20}
                  count={100}
                  factor={2}
                  saturation={1}
                  fade
                />
                <Cloud
                  opacity={0.5}
                  speed={0.5}
                  width={20}
                  depth={1.9}
                  segments={40}
                />
              </>
            )}
            <ambientLight />
          </Suspense>
        </Canvas>

        <UlWrapper>
          {db.map((project: ObjectType, index) => {
            if (index % 2 === 0) {
              return (
                <Project
                  direction="invert"
                  url={project.url}
                  img={project.img}
                  name={project.name}
                  key={project.name}
                  description={project.description}
                  tecnologias={project.tecnologias}
                  repo={project.repo}
                  has_repo={project.has_repo}
                />
              );
            }
            return (
              <Project
                url={project.url}
                img={project.img}
                name={project.name}
                key={project.name}
                repo={project.repo}
                description={project.description}
                tecnologias={project.tecnologias}
                has_repo={project.has_repo}
              />
            );
          })}
        </UlWrapper>
        <div
          style={{
            display: "flex",
            width: "100vw",
            position: "absolute",
            justifyContent: "space-around",
            top: "1400px",
            maxWidth: "1000px",
          }}
        >
        </div>
      </div>
    </>
  );
};

export default Projects;
