import { CardCollapse } from "../CardCollapse/CardCollape";
import "./Collapse.css";

export const Collapse = () => {
  return `
        <div class="containerCollapse">
            <h2>Pet Care Hub</h2>
                ${CardCollapse()}
        </div>
    `;
};
