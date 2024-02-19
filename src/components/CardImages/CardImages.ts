import "./CardImages.css";

export const CardImages = (imagSup: string, imagInf: string) => {
  return `
  <div class="containerImages">
    <img class="imageSup" src=${imagSup} alt="image cat tongue" />
    <img class="imageInf" src=${imagInf} alt="image pets pyramid" />
    <img class="imageMovil" src=${imagSup} alt="image pets pyramid" />
  </div>
  `;
};
