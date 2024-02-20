import "./Header.css";

import { LinksHTML } from "../../utils/contentLinks";

export const Header = () => {
  return `
  <h1>Pet Paradise!</h1>
    <div class="container-header">

        <a href="https://portfolio-brisna-paez.netlify.app/" target="_blank">
            <img class="logo" id="logolink" src="/logo.png" alt="logo" />
        </a>
    
        <section class="header-navbar">
            <label class="nav-label" for="hamburger">
                <img class="menu" src="/icon-menu.png" alt="icon-menu" />
            </label>
            
            <input class="nav-input" type="checkbox" id="hamburger" />

            <nav class="navbar">
                <ul class="nav-list">
                ${LinksHTML}
                </ul>
            </nav>
        </section>  

        <button id="themeBtn"><img src="/dark-mode.png" alt="logo-dark-mode" id="logo-moon-sun"/></button>
    
    </div>
    `;
};
