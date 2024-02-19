import "./style.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Elements
const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

if (headerElement && footerElement) {
  headerElement.innerHTML = Header();
  footerElement.innerHTML = Footer();
}

// Funcionality
import { changeTheme } from "./functions/changeTheme";
import { Main } from "./components/Main/Main";
import { changeCollapse } from "./functions/changeCollapse";
import { changeCarousel } from "./functions/changeCarousel";

// Ejecution
changeTheme();
Main();
changeCollapse();
changeCarousel();
