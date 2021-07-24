import * as Utils from './utils'
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.querySelector("#content");

// Build shared page components, header, main section and footer

function initializePage() {
    (function createHeader() {
        const header = document.createElement("header");
        const title = Utils.createH1("Brunchery", ["brand"])
        header.appendChild(title);

        const btnHamburger = _createHamburger();
        header.appendChild(btnHamburger);

        const links = _createLinks();
        header.appendChild(links);

        content.appendChild(header);
    })();

    (function createMain() {
        const section = document.createElement("section");
        const mainContent = document.createElement("div");
        mainContent.classList.add("main-content");

        const links = _createLinks();
        const hiddenMenu = document.createElement("div");
        hiddenMenu.classList.add("hidden-menu");
        hiddenMenu.appendChild(links);

        section.appendChild(hiddenMenu);
        section.appendChild(mainContent)
        content.appendChild(section);
    })();

    (function createFooter() {
        const footer = document.createElement("footer");
        const text = Utils.createP("Website created by ");
        const link = Utils.createLinkHref("Kostas-s", "https://github.com/kostas-s");

        footer.appendChild(text);
        footer.appendChild(link);
        content.appendChild(footer);
    })();
    loadHome();
}

function _createHamburger() {
    const btnHamburger = document.createElement("div");
    btnHamburger.classList.add("btn-hamburger");

    const bar1 = document.createElement("div");
    bar1.classList.add("bar1");
    const bar2 = document.createElement("div");
    bar2.classList.add("bar2");
    const bar3 = document.createElement("div");
    bar3.classList.add("bar3");

    btnHamburger.appendChild(bar1);
    btnHamburger.appendChild(bar2);
    btnHamburger.appendChild(bar3);

    btnHamburger.addEventListener("click", () => {
        btnHamburger.classList.toggle("change");
        const hiddenMenu = document.querySelector(".hidden-menu");
        hiddenMenu.classList.toggle("activated");
    });
    return btnHamburger;
}

function _createLinks() {
    const links = document.createElement("div");
    links.classList.add("links");

    const homeLink = Utils.createLink("Home", () => loadHome(), "Home", ["link"]);
    const menuLink = Utils.createLink("Menu", () => loadMenu(), "Menu", ["link"]);
    const contactLink = Utils.createLink("Contact", () => loadContact(), "Contact", ["link"]);

    links.appendChild(homeLink);
    links.appendChild(menuLink);
    links.appendChild(contactLink);

    return links;
}

export default initializePage;