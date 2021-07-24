import * as Utils from './utils'


function loadContact() {
    if (Utils.isActivatedLink("Contact")) return;
    const mainContent = document.querySelector(".main-content");
    mainContent.classList.remove("fade-in");
    mainContent.classList.add("fade-out");
    Utils.switchActivatedLinkTo("Contact");
    setTimeout(() => {
        mainContent.innerHTML = ""
        mainContent.classList.remove("fade-out", "menu");

        const tlCol = _buildTopLeftColumn();
        mainContent.appendChild(tlCol);
        mainContent.classList.add("fade-in");
    }, 350);
}

function _buildTopLeftColumn() {
    const tlCol = document.createElement("div");
    tlCol.classList.add("top-left-col");

    const homeTitle = Utils.createH1("Book your table now!", ["para-title"]);
    const para = Utils.createP("Contact us at: 555-53535", ["para-main"]);
    const para2 = Utils.createP("(just kidding, it's just a web dev excercise)", ["para-main"]);
    tlCol.appendChild(homeTitle);
    tlCol.appendChild(para);
    tlCol.appendChild(para2);
    return tlCol;
}

export default loadContact;