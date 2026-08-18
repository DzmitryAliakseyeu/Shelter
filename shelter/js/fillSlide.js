import { pets } from "./objects.js";

export default function fillSlide(el, randomNumber){

    const img = el.children[0];
    const namePet = el.children[1];
  
    if(window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('index.html#') || window.location.pathname.includes('index.html?')){
        img.setAttribute('src', pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        return 
    } else {
        img.setAttribute('src', '.' + pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        return 
    }
}