import { pets } from "./objects.js";
import randomArr from "./randomFunction.js";

export default function fillSlide(el, randomNumber){
    const img = el.children[0];
    const namePet = el.children[1];
    img.setAttribute('src', pets[randomNumber].imgSrc);
    namePet.textContent = pets[randomNumber].namePet;
    return 
}