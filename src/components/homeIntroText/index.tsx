import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Button from "../button";
import { DivOrganizer, DivWrapper } from "./HomeIntro";

interface TypeNav {
  navigate: Function;
}

const HomeInfoText = ({ navigate }: TypeNav) => {
  return (
    <DivWrapper>
      <section>
        <h2>Olá, eu sou João Neto</h2>
        <p>
          Seja bem-vindo!! essa aplicação contem alguns de meus projetos
          Front-End
        </p>
        <DivOrganizer>
          <mesh onPointerDown={() => navigate("/projects")}>
            <Button width="120px" background={true} text={"Projects"} />
          </mesh>

          <mesh>
            <a href="https://www.linkedin.com/in/joão-henrique-pereira-neto-6776251ba/">
              <Button width="50px" border={true}>
                <AiFillLinkedin size={20} />
              </Button>
            </a>
          </mesh>

          <mesh>
            <a href="https://github.com/assemble05">
              <Button width="50px" border={true}>
                <AiFillGithub size={20} />
              </Button>
            </a>
          </mesh>
        </DivOrganizer>
      </section>
    </DivWrapper>
  );
};
export default HomeInfoText;
