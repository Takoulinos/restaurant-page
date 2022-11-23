function loadHome() {
    const contents= document.getElementById('contents');
    while (contents.firstChild) {
        contents.removeChild(contents.firstChild)
    }
    const text = document.createElement('p');
    text.innerText = 'Welcome to our Restaurant';
    contents.appendChild(text);
}

export { loadHome }