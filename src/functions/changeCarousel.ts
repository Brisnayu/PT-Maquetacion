export const changeCarousel = () => {
  const buttonBack = document.querySelector("#btnBack");
  const buttonFront = document.querySelector("#btnFront");
  const itemsCarousel = document.querySelectorAll(".itemCarousel");
  const newArrayItemsCarousel = Array.from(itemsCarousel);

  if (buttonBack && buttonFront) {
    buttonBack.addEventListener("click", () => {
      const currentIndex = newArrayItemsCarousel.findIndex((element) =>
        element.classList.contains("carouselShow")
      );

      itemsCarousel[currentIndex].classList.remove("carouselShow");

      const prevIndex =
        (currentIndex - 1 + itemsCarousel.length) % itemsCarousel.length;
      itemsCarousel[prevIndex].classList.add("carouselShow");
    });

    buttonFront.addEventListener("click", () => {
      const currentIndex = newArrayItemsCarousel.findIndex((element) =>
        element.classList.contains("carouselShow")
      );

      itemsCarousel[currentIndex].classList.remove("carouselShow");

      const nextIndex = (currentIndex + 1) % itemsCarousel.length;
      itemsCarousel[nextIndex].classList.add("carouselShow");
    });
  }

  const automaticCarousel = () => {
    const currentIndex = Array.from(itemsCarousel).findIndex(element =>
      element.classList.contains("carouselShow")
    );
  
    itemsCarousel[currentIndex].classList.remove("carouselShow");
  
    const nextIndex = (currentIndex + 1) % itemsCarousel.length;
    itemsCarousel[nextIndex].classList.add("carouselShow");
  };
  
  const intervalTime = 15000;
  
  setInterval(automaticCarousel, intervalTime);
  
};
