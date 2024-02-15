import { contactInfo, openingTime } from "../../utils/infoFooter";
import { Card1 } from "../Card1/Card1";
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
          
            <a href="mailto:brisnapaez25@gmail.com" target="_blank">
              <img src="/rrss/logo_email.png" alt="logo email" />
            </a>
            <a href="https://github.com/Brisnayu" target="_blank">
              <img src="/rrss/logo_github.png" alt="logo github" />
            </a>
            <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154" target="_blank">
              <img src="/rrss/logo_linkedin.png" alt="logo linkedin" />
            </a>
      
          </div>
        </div>

        
      </div>

      <div class="containerInformation">
        ${Card1("Contact", contactInfo)}
        ${Card1("Opening Time", openingTime)}
        ${Card1("Contact", contactInfo)}
        ${Card1("Opening Time", openingTime)}
        <p>Copyright 2023 Brisna A. Páez M.</p>
      </div>
    </div>
    `;
};
