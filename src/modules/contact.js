import * as Utils from './utils'

const content = document.querySelector("#content");

function loadContact() {
    Utils.switchActivatedLinkTo("Contact");
}

export default loadContact;