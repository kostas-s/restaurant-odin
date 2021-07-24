import * as Utils from './utils'
import img1 from '../assets/pancakesmin.jpeg'
import img2 from '../assets/eggsavocadomin.jpeg'
import img3 from '../assets/croquemadamemin.jpeg'
import img4 from '../assets/wafflemin.jpeg'

// Clean up main section, and populate with menu tab.

function loadMenu() {
    if (Utils.isActivatedLink("Menu")) return;
    const mainContent = document.querySelector(".main-content");
    Utils.startFadeOut(mainContent);
    Utils.switchActivatedLinkTo("Menu");
    _populateContentFadeIn(mainContent, 350);
}

function _populateContentFadeIn(mainContent, time) {
    setTimeout(() => {
        mainContent.innerHTML = ""
        Utils.elementClassListCleanup(mainContent);
        mainContent.classList.add("menu");

        const title = _buildMenuTitle("A sample of our menu, prepared from our top chefs just for you...");
        const item1 = _buildMenuLine("Pancakes with Raspberries", img1);
        const item2 = _buildMenuLine("Eggs and Avocado breakfast", img2);
        const item3 = _buildMenuLine("Croque Madame", img3);
        const item4 = _buildMenuLine("Waffle", img4);
        mainContent.appendChild(title);
        mainContent.appendChild(item1);
        mainContent.appendChild(item2);
        mainContent.appendChild(item3);
        mainContent.appendChild(item4);
        Utils.startFadeIn(mainContent);
    }, time);
}

function _buildMenuTitle(text) {
    const line = document.createElement("div");
    line.classList.add("menu-line");
    const menuTitle = Utils.createH1(text, ["para-title"]);
    line.appendChild(menuTitle);
    return line;
}

function _buildMenuLine(text, img) {
    const line = document.createElement("div");
    line.classList.add("menu-line");
    const menuItem = Utils.createP(text, ["para-main", "menu-title"]);
    const menuImg = Utils.createImg(img, "menu-image", ["menu-img"]);
    line.appendChild(menuItem);
    line.appendChild(menuImg);
    return line;
}

export default loadMenu;