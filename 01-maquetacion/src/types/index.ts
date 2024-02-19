export type TypeGeneralInformation = {
  title: string;
  content: string;
};

export type TypeGeneralInformationExtended = TypeGeneralInformation & {
  list: string[];
};

export type TypeDescriptionInformation = {
  title: string;
  content: string[];
};

export type TypeProfessionInformation = {
  img: string;
  profession: string;
  name: string;
  bgC: string;
};

export type TypeLinks = {
  Home: string;
  "About Us": string;
  Services: string;
  "Pet Care Hub": string;
  Reviews: string;
  Contact: string;
};

export type TypeRRSS = {
  link: string;
  icon: string;
  alt: string;
};

export type TypeReviews = {
  avatar: string;
  name: string;
  comment: string;
};
