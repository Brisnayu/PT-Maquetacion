import "./Personal.css";

import { CardAvatar } from "../../../utils/contentAvatars";

export const Personal = () => {

  return `
    <div class="containerPersonal" id="aboutlink">
        <h3>Pet Care Staff</h3>
        <h2>Meet Our Groomers</h2>
        <div class="containerAvatars">
            ${CardAvatar}
        </div>
    </div>
    `;
};
