import { headerNav, buttonBurger } from "./constants.js";

let openMenu = false;

const style = document.createElement('style');
style.innerHTML = `
  .my-element::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;


export function measurementScreenSize() {
    const windowInnerWidth = window.innerWidth;
    if(windowInnerWidth >= 768){
        openMenu = false;
        if( document.querySelector('.close-menu')){
            document.querySelector('.close-menu').classList.remove('close-menu');
        }

        if(document.querySelector('.menu')){
            document.querySelector('.menu').classList.remove('menu');
        }
        
        if(document.querySelector('.rotate')){
            document.querySelector('.rotate').classList.remove('rotate');
        }

        if(document.querySelector('.nonrotate')){
            document.querySelector('.nonrotate').classList.remove('rotate');
        }
    }
}

export default function controlBurgerMenu(){
    if(!openMenu){
        openMenu = true;
        buttonBurger.classList.toggle('rotate');
        headerNav.classList.toggle('menu');
        headerNav.style.set
        headerNav.classList.remove('close-menu');
        buttonBurger.classList.remove('nonrotate');
        document.body.classList.add('no-scroll');
        document.head.appendChild(style);
        document.querySelector('.header').classList.add('my-element');
     
    } else {
        openMenu = false;
        buttonBurger.classList.toggle('nonrotate');
        headerNav.classList.toggle('close-menu');
        headerNav.classList.remove('menu');
        buttonBurger.classList.remove('rotate');
        document.body.classList.remove('no-scroll');
        document.querySelector('.header').classList.remove('my-element')
    }
}


