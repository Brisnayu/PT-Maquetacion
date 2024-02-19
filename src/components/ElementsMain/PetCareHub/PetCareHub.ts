import "./PetCareHub.css";

import { CollapseHTML } from "../../../utils/contentCollapse";

export const PetCareHub = () => {
  return `
        <div class="containerCollapse" id="petcarehublink">
            <h2>Pet Care Hub</h2>
                ${CollapseHTML}
        </div>
    `;
};
