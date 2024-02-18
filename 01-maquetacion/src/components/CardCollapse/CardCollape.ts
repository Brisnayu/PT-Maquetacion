import { collapsableContent } from "../../utils/contentCollapse";
import "./CardCollapse.css";

export const CardCollapse = () => {
    const collapseHTML = collapsableContent
    .map(
      ({ title, content }) => `
    <div class="containerInfo">
      <div class="containerTitle">
        <h3>${title}</h3>
        <button class="collapseButton">
          <img class="iconButton" src="/arrow-down.png" alt="arrow down" />
        </button>
      </div>
      <ul class="contentCollapse">
        ${content.map((element) => `<li>${element}</li>`).join("")}
      </ul>
    </div>
  `
    )
    .join("");

  return collapseHTML;
};
