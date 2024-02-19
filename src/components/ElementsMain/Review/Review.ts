import { Carousel } from "../../Carousel/Carousel";

import "./Review.css";

export const Review = () => {
  return `
    <div class="containerReview" id="reviewlink">
        <h3>What do our clients say?</h3>
        <h2>Our Reviews</h2>

        ${Carousel()}

    </div>
    `;
};
