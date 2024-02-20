import {
  CardRRSS,
  contactInfo,
  openingTime,
  usefulLinks,
} from "../../utils/contentFooter";
import { links } from "../../utils/contentLinks";
import { CardLink } from "../CardLink/CardLink";

import "./Footer.css";

export const Footer = () => {
  return `
    <div class="containerPrincipal">
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
        ${CardLink("Explore", undefined, Object.entries(links))}
        ${CardLink("Useful Links", usefulLinks)}
        ${CardLink("Contact", contactInfo)}
        ${CardLink("Opening Time", openingTime)}
        <p>Copyright 2023 Brisna A. Páez M.</p>
      </div>
    </div>
    `;
};
