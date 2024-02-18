export const changeCollapse = () => {
  const collapseButtons = document.querySelectorAll(".collapseButton");
  const collapseContents = document.querySelectorAll(".contentCollapse");
  const iconButtons = document.querySelectorAll(".iconButton");

  if (collapseButtons) {
    collapseButtons.forEach((collapseBtn, index) => {
      collapseBtn.addEventListener("click", () => {
        console.log("Estoy haciendo click en", index);
        collapseContents[index]?.classList.toggle("showContent");
        iconButtons[index].classList.toggle("rotateImg");
      });
    });
  }
};
