
import controlBurgerMenu from "./controlBurgerMenu.js";
import { measurementScreenSize } from "./controlBurgerMenu.js";
import { buttonArrowLeft, buttonArrowRight, buttonBurger, sliderContainer, sliderPetsBlock } from "./constants.js";
import { movedSliderRight, slideToShow, startSlider, stopSlider } from "./slider.js";
import movedSliderLeft from "./slider.js";
import { fillCurrentArray } from "./fillArrayFirstLoad.js";
export function defineSlideToShow(){
    if(window.innerWidth > 1091){
        return 3;
    } else if(window.innerWidth <= 1091 && window.innerWidth > 767) {
        return 2;
    } else if (innerWidth <= 767){
        return 1;
    }
}

const currentUrl = window.location;
console.log(currentUrl.pathname); 


if(currentUrl.pathname.includes('index.html')){
    window.addEventListener('resize', function() {
        measurementScreenSize();
    });
    
    if(buttonBurger){
        buttonBurger.addEventListener('click', controlBurgerMenu);
    }
    
    if(buttonArrowLeft){
        buttonArrowLeft.addEventListener('click', movedSliderRight);
    }
    
    if(buttonArrowRight){
        buttonArrowRight.addEventListener('click', movedSliderLeft);
    }
    
    
    
    
    
   
    
    let slideToShowFirstLoad = defineSlideToShow();
    
    
    if(slideToShowFirstLoad == 1){
        sliderContainer.style.gap = `clamp(0px, calc((100% - ${slideToShow} * 270px) / 2), 90px)`;
       
      
    }else if(slideToShowFirstLoad === 2){
        sliderContainer.style = `gap: clamp(5px, calc((100% - ${slideToShowFirstLoad} * 270px)), 90px); justify-content: space-between`;
        // console.log(sliderPetsBlock);
        // sliderPetsBlock.map((el, i) => i === 8 ? el.remove() : '' )
        // sliderPetsBlock[8].remove()
        // console.log(sliderPetsBlock)
    } else if(slideToShowFirstLoad === 3){
        sliderContainer.style = `gap: clamp(5px, calc((100% - ${slideToShowFirstLoad} * 270px) / 2), 90px); justify-content: space-between`;
    }        
    
    console.log(slideToShowFirstLoad);
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
    
}
 









