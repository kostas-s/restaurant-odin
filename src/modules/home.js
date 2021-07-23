import * as Utils from './utils'

const content = document.querySelector("#content");

function loadHome() {
    const newP = Utils.createP("BLA", ["class1", "class2"])
    content.appendChild(newP);
}

export default loadHome;