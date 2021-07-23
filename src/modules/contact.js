import * as Utils from './utils'


function loadContact() {
    if (Utils.isActivatedLink("Contact")) return;
    const mainContent = document.querySelector(".main-content");
    mainContent.classList.add("fade-out");
    Utils.switchActivatedLinkTo("Contact");
    setTimeout(() => {
        mainContent.innerHTML = ""
        mainContent.classList.remove("fade-out");

        const tlCol = _buildTopLeftColumn();
        // const trCol = _buildTopRightColumn();
        // const mlCol = _buildMidLeftColumn();
        // const mrCol = _buildMidRightColumn();
        // const blCol = _buildBotColumn();

        mainContent.appendChild(tlCol);
        // mainContent.appendChild(trCol);
        // mainContent.appendChild(mlCol);
        // mainContent.appendChild(mrCol);
        // mainContent.appendChild(blCol);

        mainContent.classList.add("fade-in");
    }, 350);
}

function _buildTopLeftColumn() {
    const tlCol = document.createElement("div");
    tlCol.classList.add("top-left-col");

    const homeTitle = Utils.createH1("Under Construction...", ["para-title"]);
    const para = Utils.createP("Check back soon!", ["para-main"]);

    tlCol.appendChild(homeTitle);
    tlCol.appendChild(para);
    return tlCol;
}

function _buildTopRightColumn() {

}

function _buildMidLeftColumn() {

}

function _buildMidRightColumn() {

}

function _buildBotColumn() {

}
export default loadContact;