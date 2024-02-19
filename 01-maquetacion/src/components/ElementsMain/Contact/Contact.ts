import { contentContacts } from "../../../utils/infoMain";
import { Form } from "../../Form/Form";
import "./Contact.css";

export const Contact = () => {
  return `
        <div class="containerContact" id="contactlink">
            <div class="containerFormPrincipal">
                <h2>${contentContacts.title}</h2>
                <p>${contentContacts.content}</p>
                ${Form()}
            </div>
            <div class="containerMaps">
                <iframe
                width="100%"
                height="100%"
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4987507115897!2d2.173403215541837!3d41.385063896673714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a29eafd1d423%3A0x34ccfa1b2e0515f0!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1627034199912!5m2!1sen!2sin"
                ></iframe>
            </div>
        </div>
    `;
};
