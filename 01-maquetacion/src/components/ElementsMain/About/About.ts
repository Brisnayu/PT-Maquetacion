import "./About.css";

import { CardImages } from "../../CardImages/CardImages";
import { Card } from "../../Card/Card";
import { contentAbout, contentAboutInf } from "../../../utils/infoMain";

export const About = () => {
  return `
    <div class="containerAbout">
      ${CardImages("/Home/black-cat.png", "/Home/dog-tongue.png")}
      ${Card(
        "containerCardText",
        contentAbout.title,
        contentAbout.content,
        contentAbout.list
      )}
      
    </div>
    <div class="containerAbout inf">
      ${CardImages("/Home/dog-pug.png", "/Home/calico-cat.png")}
      ${Card(
        "containerCardText",
        contentAboutInf.title,
        contentAboutInf.content,
        contentAboutInf.list
      )}
    </div>
    `;
};
