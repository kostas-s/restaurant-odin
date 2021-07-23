import * as Utils from './utils'

const content = document.querySelector(".main");

function loadHome() {
    Utils.switchActivatedLinkTo("Home");
}

export default loadHome;