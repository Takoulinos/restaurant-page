import Logo from './logo.png'
import './styles.css'

const body = document.querySelector('body');
const content = document.createElement('div');
content.setAttribute('id', 'content');
body.appendChild(content);

function renderHeader() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);

    const logo = new Image();
    logo.src = Logo;
    header.appendChild(logo);

    const title = document.createElement('h1');
    title.textContent = 'Burger House';
    header.appendChild(title);
}

function renderNavBar() {
    const mainPage = document.createElement('div');
    mainPage.setAttribute('id', 'main');
    content.appendChild(mainPage);

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'tabs');
    mainPage.appendChild(navBar);

    const contents = document.createElement('div');
    contents.setAttribute('id', 'contents');
    mainPage.appendChild(contents);

    const home = document.createElement('div');
    home.id = 'home';
    home.innerText = 'Home';
    home.classList.add('selected');
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerText = 'Menu';
    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.innerText = 'Contact Us';

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);
}

function renderFooter() {
    const footer = document.createElement('div')
    footer.id = 'footer'
    footer.textContent = 'Enjoy!'
    content.appendChild(footer)
}

export {
    renderHeader,
    renderNavBar,
    renderFooter
}