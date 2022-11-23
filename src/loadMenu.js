function loadMenu() {
    const contents= document.getElementById('contents');
    while (contents.firstChild) {
        contents.removeChild(contents.firstChild)
    }
    const text = document.createElement('p');
    text.innerText = 'Burgers';
    contents.appendChild(text);

}

export { loadMenu }