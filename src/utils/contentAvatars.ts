import { Avatar } from "../components/Avatar/Avatar";
import { TypeProfessionInformation } from "../types";

const avatars: TypeProfessionInformation[] = [
  {
    img: "/Avatar/avatar1.png",
    profession: "Pet Trainer",
    name: "Meghan Samit",
    bgC: "var(--color-200)"
  },
  {
    img: "/Avatar/avatar2.png",
    profession: "Veterinarian",
    name: "Alissa Silva",
    bgC: "var(--color-300)"
  },
  {
    img: "/Avatar/avatar3.png",
    profession: "Veterinarian",
    name: "Cindy Harris",
    bgC: "var(--color-600)"
  },
  {
    img: "/Avatar/avatar4.png",
    profession: "Animal Caretaker",
    name: "Lucas Tony",
    bgC: "var(--color-100)"
  }
];

export const CardAvatar = avatars
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