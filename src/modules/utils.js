function createP(text, classList = []) {
    const element = document.createElement('p');
    _addClasses(element, classList);
    element.textContent = text;
    return element;
}

function createH1(text, classList = []) {
    const element = document.createElement('h1');
    _addClasses(element, classList);
    element.textContent = text;
    return element;
}

function createBtn(text, funct, classList = []) {
    const element = document.createElement('button');
    _addClasses(element, classList);
    element.textContent = text;
    element.addEventListener("click", funct);
    return element;
}

function createLink(text, funct, id, classList = []) {
    const element = document.createElement('a');
    _addClasses(element, classList);
    element.textContent = text;
    element.id = id;
    element.addEventListener("click", funct);
    return element;
}

function createLinkHref(text, href, classList = []) {
    const element = document.createElement('a');
    _addClasses(element, classList);
    element.textContent = text;
    element.href = href;
    return element;
}

function createImg(src, alt = "image", classList = []) {
    const element = document.createElement('img');
    _addClasses(element, classList);
    element.src = src;
    element.alt = alt;
    return element;
}

function switchActivatedLinkTo(linkId) {
    const allLinks = document.querySelectorAll(".link");
    for (let link of allLinks) {
        if (link.id === linkId) {
            link.classList.add("activated");
        } else {
            link.classList.remove("activated");
        }
    }
}

function isActivatedLink(linkId) {
    const link = document.querySelector(`#${linkId}`);
    return link.classList.contains("activated");
}

function startFadeOut(element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
}

function startFadeIn(element) {
    element.classList.remove("fade-out")
    element.classList.add("fade-in");
}

function elementClassListCleanup(element) {
    element.classList.remove("menu", "contact", "fade-in");
}

function _addClasses(element, classList) {
    if (classList.length > 0) {
        for (let c of classList) {
            element.classList.add(c);
        }
    }
}

export { createP, createImg, createH1, createBtn, createLink, createLinkHref, switchActivatedLinkTo, isActivatedLink, startFadeOut, startFadeIn, elementClassListCleanup };