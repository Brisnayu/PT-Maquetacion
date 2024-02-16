import { links } from "../../utils/links";
import "./Header.css";

export const Header = () => {
  const linksHTML = Object.entries(links)
    .map(([name, link]) => `<li><a href=#${link}>${name}</a></li>`)
    .join("");

  return `
    <div class="container-header" id="homelink">

    <img class="logo" id="logolink" src="/logo.png" alt="logo" />
    
        <section class="header-navbar">
            <label class="nav-label" for="hamburger">
                <img class="menu" src="/icons/menu-hamburguer.png" alt="icon-hamburguer" />
            </label>
            
            <input class="nav-input" type="checkbox" id="hamburger" />

            <nav class="navbar">
                <ul class="nav-list">
                ${linksHTML}
                </ul>
            </nav>
        </section>  

        <button id="themeBtn"><img src="/dark-mode.png" alt="logo-dark-mode" id="logo-moon-sun"/></button>
    
    </div>
    `;
};
