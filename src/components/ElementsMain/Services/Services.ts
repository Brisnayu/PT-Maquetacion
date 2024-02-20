import "./Services.css";

import { cardsServices } from "../../../utils/contentMain";

export const Services = () => {
  return `
    <div class="containerServices" id="serviceslink">
      <h3>What we do for you?</h3>
      <h2>Our Services</h2>
        <div class="containerCards">
            ${cardsServices}
        </div>
        <img src="/Home/dog-services.png" alt="Black Cat" />
    </div>
    `;
};
