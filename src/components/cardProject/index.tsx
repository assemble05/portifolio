import HotelPet from "../../service/icons/HotelPet.svg";
import KenzieHub from "../../service/icons/KenzieHub.svg";
import NuKenzie from "../../service/icons/NuKenzie.svg";
import Hamburgueria from "../../service/icons/Hamburgueria.svg";
import { DivContent, LiWrapper } from "./cardStyle";
import BackgroundModal from "../backgroundModal";
import { useState } from "react";
import ProjectTecnology from "../projectTecnology";

interface TypedCard {
  name: string;
  description: string;
  img: string;
  direction?: string;
  url: string;
  tecnologias : any
}
const Project = ({ name, description, img, direction, url,tecnologias }: TypedCard) => {
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
  return (
    <LiWrapper direction={direction}>
      <DivContent>
        <img src={renderImg(img)} alt={name}  onClick={() => setIsOpenModal(true)} />
      </DivContent>
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <a target="_blank" rel="noreferrer" href={url}>
          <button>Acessar</button>
        </a>

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
