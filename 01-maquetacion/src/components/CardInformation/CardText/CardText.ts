import "./CardText.css";

export const CardText = (title: string, text: string, listInformation?: string[]) => {
  
    const contentList = listInformation?.map(
      (element) => `<li>
    <img class="icon" src="/cheque.png" alt="icon-list"/> 
    ${element}
  </li>`
    )
    .join("");
  
  return `
      <div class="containerCardText">
        <h2>${title}</h2>
        <p>${text}</p>
        ${contentList !== undefined ? `
        <ul class="containerList">
          ${contentList}
        </ul>` : ""}
      </div>
    `;
};
