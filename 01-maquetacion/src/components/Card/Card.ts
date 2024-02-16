import "./Card.css";

export const Card = (cardClass: string, title: string, text: string, listInformation?: string[]) => {
  
  const contentList = listInformation?.map(
    (element) => `<li>
      <img class="icon" src="/cheque.png" alt="icon-list"/> 
  ${element}
    </li>`
  ).join("");
  
  return `
    <div class=${cardClass}>
        <h4>${title}</h4>
        <p>${text}</p>
        ${contentList !== undefined ? `
        <ul class="containerList">
          ${contentList}
        </ul>` : ""}
    </div>
    `;
};
