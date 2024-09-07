import fillSlide from "./fillSlide.js";
import { pets } from "./objects.js";
import { sliderInfo } from "./popup.js";

export function fillCard(el, index){
    console.log('fillCard');
    console.log(index)
    // console.log(index)
    el.setAttribute('data-id', pets[index].id);
    el.addEventListener('click', function(e){
        console.log('set sliderInfo')
        sliderInfo(e)});
    fillSlide(el, index);
}