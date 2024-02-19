import { TypeRRSS } from "../types";

export const usefulLinks: string[] = [
  "FAQs",
  "Shop",
  "Privacy Policy",
  "Terms And Conditions",
];

export const contactInfo: string[] = [
  "pruebadeemail@gmail.com",
  "0(800)-000-00-00",
  "Barcelona, BCN, España",
];

export const openingTime: string[] = [
  "Mon - Fri: 08:00 am - 20:00 pm",
  "Saturday: 09:00 am - 20:00 pm",
  "Sunday: We are Closed",
];

const infoRRSS: TypeRRSS[] = [
  {
    link: "mailto:brisnapaez25@gmail.com",
    icon: "/rrss/logo_email.png",
    alt: "logo email",
  },
  {
    link: "https://github.com/Brisnayu",
    icon: "/rrss/logo_github.png",
    alt: "logo github",
  },
  {
    link: "https://www.linkedin.com/in/brisna-a-paez-m-283934154",
    icon: "/rrss/logo_linkedin.png",
    alt: "logo linkedin",
  },
];

export const CardRRSS = infoRRSS
.map(
  (info) =>
    `<a href=${info.link} target="_blank">
      <img src=${info.icon} alt=${info.alt} />
    </a>`
)
.join("");