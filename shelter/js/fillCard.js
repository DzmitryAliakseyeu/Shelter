import fillSlide from "./fillSlide.js";
import { pets } from "./objects.js";
import { sliderInfo } from "./popup.js";

export function fillCard(el, index){
    el.setAttribute('data-id', pets[index].id);
    el.addEventListener('click', function(e){
        sliderInfo(e)});
    fillSlide(el, index);
}