import { headerNav, buttonBurger } from "./constants.js";

let openMenu = false;

export function measurementScreenSize() {
    const windowInnerWidth = window.innerWidth;
    if(windowInnerWidth >= 768){
        console.log(windowInnerWidth);
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
        headerNav.classList.remove('close-menu');
        buttonBurger.classList.remove('nonrotate');
    } else {
        openMenu = false;
        buttonBurger.classList.toggle('nonrotate');
        headerNav.classList.toggle('close-menu');
        headerNav.classList.remove('menu');
        buttonBurger.classList.remove('rotate');
    }
}


