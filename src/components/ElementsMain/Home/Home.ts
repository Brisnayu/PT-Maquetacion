import "./Home.css";

import { CardImages } from "../../CardImages/CardImages";
import { Card } from "../../Card/Card";
import { contentHome } from "../../../utils/contentMain";

export const Home = () => {
  return `
    <div class="containerHome">
      ${CardImages("/Home/cat-tongue.png", "/Home/pet-pyramid.png")}
      ${Card("containerCardText", contentHome.title, contentHome.content)}
    </div>
    `;
};
