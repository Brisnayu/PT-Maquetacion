import "./Card.css";

export const Card = (title: string, content: string) => {
  return `
    <div class="containerCard">
        <h4>${title}</h4>
        <p>${content}</p>
    </div>
    `;
};
