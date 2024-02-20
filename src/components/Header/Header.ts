import "./Header.css";

import { LinksHTML } from "../../utils/contentLinks";

export const Header = () => {
  return `
    <div class="container-header">

        <a href="https://portfolio-brisna-paez.netlify.app/" target="_blank">
            <img class="logo" id="logolink" src="/logo.png" alt="logo" />
        </a>
    
        <section class="header-navbar">
            <label class="nav-label" for="hamburger">
                <img class="menu" src="/icons/menu-hamburguer.png" alt="icon-hamburguer" />
            </label>
            
            <input class="nav-input" type="checkbox" id="hamburger" />

            <nav class="navbar">
                <ul class="nav-list">
                ${LinksHTML}
                </ul>
            </nav>

            <button id="themeBtn"><img src="/dark-mode.png" alt="logo-dark-mode" id="logo-moon-sun"/></button>
        </section>  

    </div>
    `;
};
