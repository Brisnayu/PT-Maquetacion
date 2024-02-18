import {
  contactInfo,
  explore,
  infoRRSS,
  openingTime,
  usefulLinks,
  // usefulLinks,
} from "../../utils/infoFooter";
import { CardLink } from "../CardLink/CardLink";

import "./Footer.css";

export const Footer = () => {
  const CardRRSS = infoRRSS
    .map(
      (info) =>
        `<a href=${info.link} target="_blank">
          <img src=${info.icon} alt=${info.alt} />
        </a>`
    )
    .join("");

  return `
    <div class="containerPrincipal" id="contactlink">
      <div class="containerForm">
        <img src="/logo.png" alt="logo" />
        
        <label class="label-follow">
          <input class="input-follow" type="text" id="hamburger" />
          <img src="/arrow.png" alt="logo arrow" />
        </label>
        

        <div class="containerRRSS">
          <h4>Follow Us</h4>
          <div>
            ${CardRRSS}
          </div>
        </div>

        
      </div>

      <div class="containerInformation">
        ${CardLink("Explore", undefined, Object.entries(explore))}
        ${CardLink("Useful Links", usefulLinks)}
        ${CardLink("Contact", contactInfo)}
        ${CardLink("Opening Time", openingTime)}
        <p>Copyright 2023 Brisna A. Páez M.</p>
      </div>
    </div>
    `;
};
        /* ${CardLink("UsefulLinks", undefined, Object.entries(usefulLinks))}*/