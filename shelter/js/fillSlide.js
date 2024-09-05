import { pets } from "./objects.js";
import randomArr from "./randomNumber.js";

export default function fillSlide(el, randomNumber){
    console.log('fillSlideFunc')
    const img = el.children[0];
    const namePet = el.children[1];
   /*  console.log(window.location) */
    if(window.location.pathname.includes('index.html')){
        // img.src = pets[randomNumber].imgSrc;
        img.setAttribute('src', pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        console.log('fillSlide')
        return 
    } else {
        img.setAttribute('src', '.' + pets[randomNumber].imgSrc);
        namePet.textContent = pets[randomNumber].namePet;
        // console.log('fillSlide')
        return 
    }
    
}