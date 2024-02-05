import "./style.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

// Elements
const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");
const mainElement = document.querySelector("main");

if (headerElement && footerElement && mainElement) {
  headerElement.innerHTML = Header();
  footerElement.innerHTML = Footer();
  mainElement.innerHTML = Main();
}

// Funcionality
import { changeTheme } from "./utils/changeTheme";

// Ejecution
changeTheme();
