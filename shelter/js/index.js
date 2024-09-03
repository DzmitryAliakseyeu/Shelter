
import controlBurgerMenu from "./controlBurgerMenu.js";
import { measurementScreenSize } from "./controlBurgerMenu.js";
import { buttonArrowLeft, buttonArrowRight, buttonBurger, sliderContainer, sliderPetsBlock } from "./constants.js";
import { movedSliderRight, slideToShow, startSlider, stopSlider } from "./slider.js";
import movedSliderLeft from "./slider.js";
import { fillCurrentArray } from "./fillArrayFirstLoad.js";


 
window.addEventListener('resize', function() {
    measurementScreenSize();
});

buttonBurger.addEventListener('click', controlBurgerMenu);

buttonArrowLeft.addEventListener('click', movedSliderRight);
buttonArrowRight.addEventListener('click', movedSliderLeft);



export function defineSlideToShow(){
    if(window.innerWidth > 1091){
        return 3;
    } else if(window.innerWidth <= 1091 && window.innerWidth > 767) {
        return 2;
    } else if (innerWidth <= 767){
        return 1;
    }
}

let slideToShowFirstLoad = defineSlideToShow();


if(slideToShowFirstLoad == 1){
    sliderContainer.style.gap = `clamp(0px, calc((100% - ${slideToShow} * 270px) / 2), 90px)`;
   
  
}else if(slideToShowFirstLoad === 2){
    sliderContainer.style = `gap: clamp(5px, calc((100% - ${slideToShow} * 270px)), 90px); justify-content: space-between`;
    // console.log(sliderPetsBlock);
    // sliderPetsBlock.map((el, i) => i === 8 ? el.remove() : '' )
    // sliderPetsBlock[8].remove()
    // console.log(sliderPetsBlock)
} else if(slideToShowFirstLoad === 3){
    sliderContainer.style = `gap: clamp(5px, calc((100% - ${slideToShow} * 270px) / 2), 90px); justify-content: space-between`;
}        

console.log(slideToShowFirstLoad)
let currentArrFirst = fillCurrentArray(slideToShowFirstLoad);

if(currentArrFirst.length > 0){
    startSlider(currentArrFirst)
}

window.addEventListener('resize', ()=> {
    stopSlider();
    slideToShowFirstLoad = defineSlideToShow();
 
    let currentArrFirst = fillCurrentArray(slideToShowFirstLoad);

    if(currentArrFirst.length > 0){
        startSlider(currentArrFirst)
    }

})









