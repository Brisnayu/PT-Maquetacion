import "./CardInformation.css";

import { CardImages } from "./CardImages/CardImages";
import { CardText } from "./CardText/CardText";

// PUEDE QUE ESTE COMPONENTE NO SEA NECESARIO!

export const CardInformation = () => {
  return `
    ${CardImages("/Home/cat-tongue.png", "/Home/pet-pyramid.png")}
    ${CardText("hola", "chao")}
    `;
};