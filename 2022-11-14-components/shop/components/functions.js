export function createElement(paramsObj) {
    let { tag, content, classes, href, src, alt } = paramsObj
    const element = document.createElement(tag);
    element.textContent = content;
    if (classes) { element.className = classes };
    if (href) { element.href = href };
    if (src) { element.src = src };
    if (alt) { element.alt = alt };
    
    return element
}

