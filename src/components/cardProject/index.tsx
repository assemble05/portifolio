import HotelPet from "../../service/icons/HotelPet.svg";
import KenzieHub from "../../service/icons/KenzieHub.svg";
import NuKenzie from "../../service/icons/NuKenzie.svg";
import Hamburgueria from "../../service/icons/Hamburgueria.svg";

import { DivContent, LiWrapper } from "./cardStyle";

interface TypedCard {
  name: string;
  description: string;
  img: string;
  direction?: string;
  url: string;
}
const Project = ({ name, description, img, direction, url }: TypedCard) => {
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
        <img src={renderImg(img)} alt={name} />
      </DivContent>
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <a target="_blank" rel="noreferrer" href={url}>
          <button>Access</button>
        </a>
      </div>
    </LiWrapper>
  );
};
export default Project;
