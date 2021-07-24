import * as Utils from './utils'

// Clean up main section, and populate with contact tab.

function loadContact() {
    if (Utils.isActivatedLink("Contact")) return;
    const mainContent = document.querySelector(".main-content");
    Utils.startFadeOut(mainContent);
    Utils.switchActivatedLinkTo("Contact");
    _populateContentFadeIn(mainContent, 350);
}

function _populateContentFadeIn(mainContent, time) {
    setTimeout(() => {
        mainContent.innerHTML = ""
        Utils.elementClassListCleanup(mainContent);
        mainContent.classList.add("contact");

        const tlCol = _buildTopLeftColumn();
        mainContent.appendChild(tlCol);

        Utils.startFadeIn(mainContent);
    }, time);
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