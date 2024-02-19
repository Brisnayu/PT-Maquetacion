export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  const changeLogoDarkMode = document.getElementById("logo-moon-sun") as HTMLImageElement;;

  if (themeBtn && changeLogoDarkMode) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      console.log("hola")

      document.body.classList.value === "dark"
        ? (changeLogoDarkMode.src = "/light-mode.png")
        : (changeLogoDarkMode.src = "/dark-mode.png");
    });
  }
};
