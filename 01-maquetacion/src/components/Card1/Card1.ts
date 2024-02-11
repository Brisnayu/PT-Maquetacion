import "./Card1.css";

export const Card1 = (title: string, textInformation?: string[]) => {
  const contentText = textInformation
    ?.map((element) => `<li>${element}</li>`)
    .join("");

  return `
      <div class="containerCard1">
        ${
          contentText !== undefined
            ? `
        <ul class="containerList1"> ${title}
          ${contentText}
        </ul>`
            : ""
        }
      </div>
    `;
};
