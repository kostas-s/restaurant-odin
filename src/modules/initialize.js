import * as Utils from './utils'
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.querySelector("#content");

function initializePage() {
    (function createHeader() {
        const header = document.createElement("header");
        const title = Utils.createH1("Brunchery", ["brand"])
        header.appendChild(title);

        const links = document.createElement("div");
        links.classList.add("links");

        const homeLink = Utils.createLink("Home", () => loadHome(), "Home", ["link"]);
        const menuLink = Utils.createLink("Menu", () => loadMenu(), "Menu", ["link"]);
        const contactLink = Utils.createLink("Contact", () => loadContact(), "Contact", ["link"]);

        links.appendChild(homeLink);
        links.appendChild(menuLink);
        links.appendChild(contactLink);

        header.appendChild(links);
        content.appendChild(header);

        Utils.switchActivatedLinkTo("Home");
    })();

    (function createMain() {
        const main = document.createElement("section");
        content.appendChild(main);
    })();

    (function createFooter() {
        const footer = document.createElement("footer");
        const text = Utils.createP("Website created by ");
        const link = Utils.createLinkHref("Kostas-s", "https://github.com/kostas-s");

        footer.appendChild(text);
        footer.appendChild(link);

        content.appendChild(footer);
    })();
}

export default initializePage;