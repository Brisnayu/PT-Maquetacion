import "./Home.css";

import { CardImages } from "../../CardInformation/CardImages/CardImages";
import { CardText } from "../../CardInformation/CardText/CardText";
import { contentHome } from "../../../utils/content";

export const Home = () => {
  return `
    <div class="containerHome">
      ${CardImages("/Home/cat-tongue.png", "/Home/pet-pyramid.png")}
      ${CardText(contentHome.title, contentHome.text)}
    </div>
    `;
};
