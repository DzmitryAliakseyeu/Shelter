import { pets } from "./objects.js";
import randomArr from "./randomNumber.js";

export default function fillSlide(el, randomNumber){
    const img = el.children[0];
    const namePet = el.children[1];
    console.log(window.location)
    if(window.location.pathname.includes('index.html')){
        img.setAttribute('src', pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        console.log('fillSlide')
        return 
    } else {
        img.setAttribute('src', '.' + pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        console.log('fillSlide')
        return 
    }
    
}