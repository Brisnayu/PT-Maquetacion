import { PetCareHub } from "../ElementsMain/PetCareHub/PetCareHub";
import { Contact } from "../ElementsMain/Contact/Contact";
import { About } from "../ElementsMain/About/About";
import { Home } from "../ElementsMain/Home/Home";
import { Personal } from "../ElementsMain/Personal/Personal";
import { Review } from "../ElementsMain/Review/Review";
import { Services } from "../ElementsMain/Services/Services";
import { Hero } from "../ElementsMain/Hero/Hero";
import "./Main.css";

export const Main = () => {
  const main = document.querySelector("main");

  if (main) {
    main.innerHTML = `
    <div class="containerMain">
        ${Hero()}
        ${Home()}
        ${Personal()}
        ${Services()}
        ${PetCareHub()}
        ${About()}
        ${Review()}
        ${Contact()}
    </div>
    `;
  }
};
