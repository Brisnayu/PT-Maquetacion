import "./Services.css";

import { contentServices } from "../../../utils/content";
import { Card } from "../../Card/Card";

export const Services = () => {
  const cardsServices = contentServices
    .map((service) => `${Card(service.title, service.content)}`)
    .join("");

  return `
    <div class="containerServices">
      <h3>What we do for you?</h3>
      <h2>Our Services</h2>
        <div class="containerCards">
            ${cardsServices}
        </div>
        <img src="/Home/black-cat.png" alt="Black Cat" />
    </div>
    `;
};
