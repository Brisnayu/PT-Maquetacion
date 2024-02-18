const links = {
  Home: "homelink",
  "About Us": "aboutlink",
  Services: "serviceslink",
  "Pet Care Hub": "petcarehublink",
  Reviews: "reviewlink",
  Contact: "contactlink"
};

export const LinksHTML = Object.entries(links)
.map(([name, link]) => `<li><a href=#${link}>${name}</a></li>`)
.join("");