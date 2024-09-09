
import controlBurgerMenu from "./controlBurgerMenu.js";
import { measurementScreenSize } from "./controlBurgerMenu.js";
import { buttonArrowLeft, buttonArrowRight, buttonBurger, sliderContainer, sliderPetsBlock } from "./constants.js";
import { movedSliderRight, slideToShow, startSlider, stopSlider } from "./slider.js";
import movedSliderLeft from "./slider.js";
import { fillCurrentArray } from "./fillArrayFirstLoad.js";
import { fillCard } from "./fillCard.js";
import { generateSlidesArray } from "./generateArraySlides.js";
export function defineSlideToShow(){
    if(window.innerWidth > 1091){
        return 3;
    } else if(window.innerWidth <= 1091 && window.innerWidth > 767) {
        return 2;
    } else if (innerWidth <= 767){
        return 1;
    }
}

export function defineSlideToShowPets(){
    if(window.innerWidth > 1276){
        return 8;
    } else if(window.innerWidth <= 1276 && window.innerWidth > 639) {
        return 6;
    } else if (innerWidth <= 639){
        return 3;
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
    
} else if(currentUrl.pathname.includes('pets.html')){
    
    if(buttonBurger){
        buttonBurger.addEventListener('click', controlBurgerMenu);
    }
    let mainArr = generateSlidesArray();
    console.log(mainArr);
    let pageCount = Number(document.querySelector('.navigation-block__count').textContent);

    let slideToShowPets = defineSlideToShowPets();

    console.log(slideToShowPets);
    sliderPetsBlock.forEach((el, i) => {
        console.log('gere')
        // console.log('slideToShowPets in circle: ' + slideToShowPets, 'i: ' + i)
        if(i > slideToShowPets) {
            el.style = 'display: none;'
        }
       fillCard(el, mainArr[pageCount - 1][i]);
       
    })


    window.addEventListener('resize', function() {
        measurementScreenSize();

        slideToShowPets = defineSlideToShowPets();
        console.log('slideToShowPets: ' + slideToShowPets);
        sliderPetsBlock.forEach((el, i) => {
            console.log('this')
            console.log('slideToShowPets in circle: ' + slideToShowPets, 'i: ' + i)
            if(i > slideToShowPets-1){
                el.style = 'display: none;'
            } else {
                el.removeAttribute('style')
                fillCard(el, mainArr[pageCount - 1][i]);
            }
        })
        return 
    });
}
 









