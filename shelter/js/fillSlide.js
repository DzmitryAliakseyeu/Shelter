import { pets } from "./objects.js";
import randomArr from "./randomNumber.js";

export default function fillSlide(el, randomNumber){

    console.log('fillSlide')
    const img = el.children[0];
    const namePet = el.children[1];
  
    if(window.location.pathname.includes('index.html')){
        img.setAttribute('src', pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        return 
    } else {
        img.setAttribute('src', '.' + pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        return 
    }
    
}