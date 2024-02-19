import "./CardLink.css";

export const CardLink = (title: string, textInformation?: string[], linkContent?: [string, string][]) => {
  
  const contentText = textInformation
    ?.map((element) => `<li>${element}</li>`)
    .join("");

    const contentLinks = (linkContent)
    ?.map(([title, link]) => `<li><a href=#${link}>${title}</a></li>`)
    .join("");

  return `
      <div class="containerCard1">
      <ul class="containerList1">
        ${title}
        ${contentText !== undefined ? contentText : contentLinks}
      </ul>
      </div>
    `;
};
