import "./About.css";

import { CardImages } from "../../CardInformation/CardImages/CardImages";
import { CardText } from "../../CardInformation/CardText/CardText";
import { contentAbout, contentAboutInf } from "../../../utils/content";

export const About = () => {
  return `
    <div class="containerAbout">
      ${CardImages("/Home/black-cat.png", "/Home/dog-tongue.png")}
      ${CardText(contentAbout.title, contentAbout.text, contentAbout.list)}
      
    </div>
    <div class="containerAbout inf">
      ${CardImages("/Home/dog-pug.png", "/Home/calico-cat.png")}
      ${CardText(contentAboutInf.title, contentAboutInf.text, contentAboutInf.list)}
    </div>
    `;
};
