// Pasar los tipos a un archivo aparte!

type TypeHome = {
  title: string;
  text: string;
};
type AboutContent = {
  title: string;
  text: string;
  list: string[];
};

type TypeServices = {
  title: string;
  content: string;
};

export const contentHome: TypeHome = {
  title: "Established & Trusted Pet Care Service",
  text: "We take pride in providing a pet care service that has been established with dedication and earned the trust of numerous pet owners over the years. We understand that your furry friends are an integral part of your family, which is why we strive to deliver exceptional and trustworthy care for each one of them.",
};

export const contentAbout: AboutContent = {
  title: "Best Agency For Your Pet.",
  text: "With years of pet care industry experience, we've built a strong reputation rooted in caring attention, professionalism, and a commitment to the safety and well-being of your beloved pets.",
  list: [
    "Certifilied Groomer",
    "Animal Lover",
    "14+ Year Experience",
    "Pet Parent Of 3 Dogs",
  ],
};

export const contentAboutInf: AboutContent = {
  title: "Taking A Vacation? So Is Your Pet.",
  text: "Our highly trained and passionate team is dedicated to providing the highest level of service, ensuring your pets feel happy, healthy and loved during every visit.",
  list: ["Pet Boarding", "Pet Daycare", "Pet Transport"],
};

export const contentServices: TypeServices[] = [
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

export const contentHero: TypeServices = {
  title: "Welcome to PetParadise!",
  content: "Embark on a journey of pet love and joy. PetParadise is your destination for heartwarming tales, helpful tips, and the shared passion for our furry friends. Join our community, where every pawprint tells a story, and together, we celebrate the happiness that pets bring into our lives. Your pet's paradise awaits!",
};
