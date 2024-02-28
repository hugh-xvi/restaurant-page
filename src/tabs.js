import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    const content=document.querySelector('#content');
    const d1=document.createElement('div');
    const d2=document.createElement('div');
    const d3=document.createElement('div');

    d1.setAttribute('id','home-btn');
    d2.setAttribute('id','menu-btn');
    d3.setAttribute('id','contact-btn');

    d1.classList.add('tab');
    d2.classList.add('tab');
    d3.classList.add('tab');

    d1.textContent='home';
    d2.textContent='menu';
    d3.textContent='contact';

    content.appendChild(d1);
    content.appendChild(d2);
    content.appendChild(d3);

    d1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    d2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    d3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })

function clearContent(){
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent){
        content.removeChild(pageContent);
    }
}
}
export default createTabs;