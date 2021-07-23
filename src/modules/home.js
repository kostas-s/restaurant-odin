import * as Utils from './utils'
import brunch1Img from '../assets/brunch1min.jpeg'
import eggsImg from '../assets/eggsmin.png'


function loadHome() {
    if (Utils.isActivatedLink("Home")) return;
    const mainContent = document.querySelector(".main-content");
    mainContent.classList.add("fade-out");
    Utils.switchActivatedLinkTo("Home");
    setTimeout(() => {
        mainContent.innerHTML = ""
        mainContent.classList.remove("fade-out");

        const tlCol = _buildTopLeftColumn();
        const trCol = _buildTopRightColumn();
        const mlCol = _buildMidLeftColumn();
        const mrCol = _buildMidRightColumn();
        const blCol = _buildBotColumn();

        mainContent.appendChild(tlCol);
        mainContent.appendChild(trCol);
        mainContent.appendChild(mlCol);
        mainContent.appendChild(mrCol);
        mainContent.appendChild(blCol);

        mainContent.classList.add("fade-in");
    }, 350);
}

function _buildTopLeftColumn() {
    const tlCol = document.createElement("div");
    tlCol.classList.add("top-left-col");

    const homeTitle = Utils.createH1("Enjoy the relaxing experience of brunch", ["para-title"]);
    const para = Utils.createP("We offer the most delicious brunch ideas in a beautiful environment. Perfect for your coffee break or mid-day lunch!", ["para-main"]);

    tlCol.appendChild(homeTitle);
    tlCol.appendChild(para);
    return tlCol;
}

function _buildTopRightColumn() {
    const img1 = Utils.createImg(brunch1Img, "brunch image", ["top-right-col", "image1"]);
    return img1;
}

function _buildMidLeftColumn() {
    const mlCol = document.createElement("div");
    mlCol.classList.add("mid-left-col");

    const img2 = Utils.createImg(eggsImg, "eggs image", ["image2"]);
    mlCol.appendChild(img2);
    return mlCol;
}

function _buildMidRightColumn() {
    const mrCol = document.createElement("div");
    mrCol.classList.add("mid-right-col");

    const para2 = Utils.createP("Our ingredients come from our trusted producers fresh every day, so that we can deliver you the experience you deserve.", ["para-main"])
    const title2 = Utils.createH1("Quality ingredients, Delicious recipes!", ["para-title"])
    mrCol.appendChild(title2);
    mrCol.appendChild(para2);
    return mrCol;
}

function _buildBotColumn() {
    const botCol = document.createElement("div");
    botCol.classList.add("bot-col");

    const title = Utils.createH1("Take a well-deserved break...", ["para-title"]);
    botCol.appendChild(title);

    const para = Utils.createP("Call us to make your reservation!", ["para-main"]);
    botCol.appendChild(para);
    return botCol;
}


export default loadHome;