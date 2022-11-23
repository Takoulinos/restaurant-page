function loadContact() {
    const contents= document.getElementById('contents');
    while (contents.firstChild) {
        contents.removeChild(contents.firstChild)
    }
    const text = document.createElement('p');
    text.innerText = 'Contact Info';
    contents.appendChild(text);

}

export { loadContact }