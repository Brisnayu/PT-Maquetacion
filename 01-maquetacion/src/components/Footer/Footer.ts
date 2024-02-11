import { contactInfo, openingTime } from "../../utils/infoFooter";
import { Card1 } from "../Card1/Card1";
import "./Footer.css";

export const Footer = () => {
  return `
    <div class="containerPrincipal">
      <div class="containerForm">
        <h1>Adios</h1>
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
