import HotelPet from "../../service/icons/HotelPet.svg";
import KenzieHub from "../../service/icons/KenzieHub.svg";
import NuKenzie from "../../service/icons/NuKenzie.svg";
import Hamburgueria from "../../service/icons/Hamburgueria.svg";
import { DivButtons, DivContent, LiWrapper } from "./cardStyle";
import BackgroundModal from "../backgroundModal";
import { useState } from "react";
import ProjectTecnology from "../projectTecnology";
import Button from "../button";
import { AiFillGithub } from "react-icons/ai";

interface TypedCard {
  name: string;
  description: string;
  img: string;
  direction?: string;
  url: string;
  tecnologias : any
  repo : string
  has_repo : boolean
}
const Project = ({ name, description, img, direction, url,tecnologias, repo, has_repo }: TypedCard) => {
  const [modal, setIsOpenModal] = useState(false);

  const renderImg = (img: string) => {
    switch (img) {
      case "NuKenzie":
        return NuKenzie;
      case "HotelPet":
        return HotelPet;
      case "KenzieHub":
        return KenzieHub;
      case "Hamburgueria":
        return Hamburgueria;
      default:
        return "";
    }
  };
  const directionGit = () => {
     return direction === "invert" ? true : false
  }
  return (
    <LiWrapper direction={direction}>
      <DivContent>
        <img src={renderImg(img)} alt={name}  onClick={() => setIsOpenModal(true)} />
      </DivContent>
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
       <DivButtons direct={directionGit()}>
        <a target="_blank" rel="noreferrer" href={url}>
          <button className="button">Acessar</button>
        </a>
        {
         has_repo &&  <a className="git" href={repo} target="_blank">
              <Button width="50px" style={{width: "40px", height : "40px", borderRadius: "6px"}} border={true}>
                <AiFillGithub size={20} />
              </Button>
        </a>

        }

       </DivButtons>

        {modal && (
          <BackgroundModal>
            <ProjectTecnology tecnologias={tecnologias} />
            <button 
              className="close-modal"
              onClick={() => setIsOpenModal(false)}
            >Fechar</button>
          </BackgroundModal>
        )}
      </div>
    </LiWrapper>
  );
};
export default Project;
