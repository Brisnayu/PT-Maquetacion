import { contentHero } from "../../utils/content";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import "./Hero.css";

export const Hero = () => {
  return `
        <div class="containerHero">
            ${Card("containerCardText", contentHero.title, contentHero.content)}
            ${Button("Get started now!")}
        </div>
    `;
};
