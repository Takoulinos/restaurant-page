import { renderHeader, renderNavBar, renderFooter } from "./page-load";
import './styles.css'
import { loadHome } from './loadHome.js'
import { loadMenu } from './loadMenu.js'
import { loadContact } from './loadContact.js'

function switchTab(e) {
    const navBar = document.getElementById('tabs');
    const tabs = navBar.children;
    if (e.target.classList.contains('selected')) {
        return
    }
    else {
        for (let i=0; i<tabs.length; i++) {
            tabs[i].classList.remove('selected');
        }
        e.target.classList.add('selected');
    }
}

renderHeader();
renderNavBar();
renderFooter();

loadHome();

const home = document.getElementById('home')
home.addEventListener('click', (e) => {
    switchTab(e)
    loadHome()
})
const menu = document.getElementById('menu')
menu.addEventListener('click', (e) => {
    switchTab(e)
    loadMenu()
})
const contact = document.getElementById('contact')
contact.addEventListener('click', (e) => {
    switchTab(e)
    loadContact()
})