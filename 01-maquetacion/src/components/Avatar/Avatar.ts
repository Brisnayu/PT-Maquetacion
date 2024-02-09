import "./Avatar.css";

export const Avatar = (
  avatar: string,
  profession: string,
  name: string,
  bgC: string
) => {
  return `
    <div class="containerAvatar">
        <img src=${avatar} alt="image Avatar" style="background-color: ${bgC}"  />
        <p>${profession}</p>
        <h4>${name}</h4>
    </div>
    `;
};
