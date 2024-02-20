import { Card } from "../components/Card/Card";
import {
  TypeGeneralInformation,
  TypeGeneralInformationExtended,
} from "../types";

export const contentHome: TypeGeneralInformation = {
  title: "Established & Trusted Pet Care Service",
  content:
    "We take pride in providing a pet care service that has been established with dedication and earned the trust of numerous pet owners over the years. We understand that your furry friends are an integral part of your family, which is why we strive to deliver exceptional and trustworthy care for each one of them.",
};

export const contentAbout: TypeGeneralInformationExtended = {
  title: "Best Agency For Your Pet.",
  content:
    "With years of pet care industry experience, we've built a strong reputation rooted in caring attention, professionalism, and a commitment to the safety and well-being of your beloved pets.",
  list: [
    "Certifilied Groomer",
    "Animal Lover",
    "14+ Year Experience",
    "Pet Parent Of 3 Dogs",
  ],
};

export const contentAboutInf: TypeGeneralInformationExtended = {
  title: "Taking A Vacation? So Is Your Pet.",
  content:
    "Our highly trained and passionate team is dedicated to providing the highest level of service, ensuring your pets feel happy, healthy and loved during every visit.",
  list: ["Pet Boarding", "Pet Daycare", "Pet Transport"],
};

const contentServices: TypeGeneralInformation[] = [
  {
    title: "Puppy Sitting",
    content:
      "Provide attentive care for puppies, including playtime, feeding, and bathroom breaks.",
  },
  {
    title: "Dog Walking",
    content:
      "Offer regular dog walking services to keep your furry friend happy and healthy.",
  },
  {
    title: "Pet Sitting",
    content:
      "Deliver in-home pet sitting services, ensuring your pets are comfortable and well-cared for.",
  },
  {
    title: "Overnight Care",
    content:
      "Provide overnight care for pets, offering companionship and a secure environment.",
  },
  {
    title: "Pet Taxi",
    content:
      "Offer pet taxi services to transport your pets to and from appointments or activities.",
  },
  {
    title: "PetMedical Admin",
    content:
      "Assist with pet medical administration, including medication and special care as needed.",
  },
];

export const contentHero: TypeGeneralInformation = {
  title: "Welcome to PetParadise!",
  content:
    "Embark on a journey of pet love and joy. PetParadise is your destination for heartwarming tales, helpful tips, and the shared passion for our furry friends. Join our community, where every pawprint tells a story, and together, we celebrate the happiness that pets bring into our lives. Your pet's paradise awaits!",
};

export const contentContacts: TypeGeneralInformation = {
  title: "Contact Us",
  content:
    "We will be delighted to answer your questions and address your concerns. Fill out the following form so that we can get in touch with you as soon as possible:",
};

export const cardsServices = contentServices
  .map((service) => `${Card("containerCard", service.title, service.content)}`)
  .join("");
