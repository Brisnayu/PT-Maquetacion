import "./Carousel.css";

import { Reviews } from "../../utils/contentReviews";

export const Carousel = () => {

  return `
    <div class="containerCarousel">
        <div class="carousel">

            <button id="btnBack">
                <img class="iconButton" src="/arrow-down.png" alt="arrow down" />
            </button>
      
            ${Reviews}

            <button id="btnFront">
                <img class="iconButton" src="/arrow-down.png" alt="arrow down" />
            </button>
        </div>
    </div>
    `;
};
