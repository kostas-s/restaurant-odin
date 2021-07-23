import * as Utils from './utils'

const content = document.querySelector("#content");

function loadMenu() {
    Utils.switchActivatedLinkTo("Menu");
}

export default loadMenu;