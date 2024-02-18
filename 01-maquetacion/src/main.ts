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
import { changeTheme } from "./utils/changeTheme";
import { Main } from "./components/Main/Main";
import { changeCollapse } from "./utils/changeCollapse";
import { changeCarousel } from "./utils/changeCarousel";

// Ejecution
changeTheme();
Main();
changeCollapse();
changeCarousel();