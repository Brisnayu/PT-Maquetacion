import { avatars } from "../../../utils/infoAvatars";
import { Avatar } from "../../Avatar/Avatar";
import "./Personal.css";

export const Personal = () => {
  const CardAvatar = avatars
    .map(
      (information) =>
        `${Avatar(
          information.img,
          information.profession,
          information.name,
          information.bgC
        )}`
    )
    .join("");

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
