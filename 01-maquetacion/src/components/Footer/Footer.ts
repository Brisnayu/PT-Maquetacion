import {
  CardRRSS,
  contactInfo,
  explore,
  openingTime,
  usefulLinks,
} from "../../utils/infoFooter";
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