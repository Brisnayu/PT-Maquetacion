import { contentHero } from "../../../utils/infoMain";
import { Button } from "../../Button/Button";
import { Card } from "../../Card/Card";
import "./Hero.css";

export const Hero = () => {
  return `
        <div class="containerHero" id="homelink">
            ${Card("containerCardText", contentHero.title, contentHero.content)}
            ${Button("Get started now!")}
        </div>
    `;
};
