import { Collapse } from "../Collapse/Collapse";
import { About } from "../ElementsMain/About/About";
import { Home } from "../ElementsMain/Home/Home";
import { Personal } from "../ElementsMain/Personal/Personal";
import { Review } from "../ElementsMain/Review/Review";
import { Services } from "../ElementsMain/Services/Services";
import { Hero } from "../Hero/Hero";
import "./Main.css";

export const Main = () => {
  const main = document.querySelector("main");

  if (main) {
    main.innerHTML = `
    <div class="containerMain">
        ${Hero()}
        ${Home()}
        
        ${Services()}
        ${Personal()}
        ${About()}

        ${Collapse()}
        ${Review()}
    </div>
    `;
  }
};
