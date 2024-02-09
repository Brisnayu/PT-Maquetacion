import { About } from "../ElementsMain/About/About";
import { Home } from "../ElementsMain/Home/Home";
import { Personal } from "../ElementsMain/Personal/Personal";
import { Services } from "../ElementsMain/Services/Services";
import "./Main.css";

export const Main = () => {
  const main = document.querySelector("main");

  if (main) {
    main.innerHTML = `
    <div class="containerMain">
        ${Home()}
        ${About()}
        ${Services()}
        ${Personal()}
    </div>
    `;
  }
};
