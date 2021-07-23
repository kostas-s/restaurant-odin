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


function createBtn(text, classList = []) {
    const element = document.createElement('button');
    _addClasses(element, classList);
    element.textContent = text;
    return element;
}


function createLink(text, url, classList = []) {
    const element = document.createElement('a');
    _addClasses(element, classList);
    element.textContent = text;
    element.href = url;
    return element;
}


function createImg(src, alt = "image", classList = []) {
    const element = document.createElement('img');
    _addClasses(element, classList);
    element.src = src;
    element.alt = alt;
    return element;
}


function _addClasses(element, classList) {
    if (classList.length > 0) {
        for (let c of classList) {
            element.classList.add(c);
        }
    }
}

export { createP, createImg, createH1, createBtn, createLink };