import { sliderContainer, sliderPetsBlock} from "./constants.js";
import { fillCurrentArray } from "./fillArrayFirstLoad.js";
import fillSlide from "./fillSlide.js";
import { defineSlideToShow } from "./index.js";
import { arrLastSlides, pets } from "./objects.js";
import { sliderInfo } from "./popup.js";
import randomArr from "./randomNumber.js";

export let slideToShow;
let slideWidth = sliderPetsBlock[0].clientWidth;
let slidesWidth;
let gap;
let gapAdd;
let sliderStep = 0;
let currentIndex = 1;
let randomNumber = 0;
let currentArr = [];
let count  = 0;
let move;

export let random = (arr) => {
    if(!Array.isArray(arr)){
        return;
    }

    do {
        randomNumber = randomArr(0, pets.length-1);
    } while (arr.includes(randomNumber) || arrLastSlides.includes(randomNumber));
    arr.push(randomNumber);
    return arr;
}

function fillCurrentArrayIfEmpty(slideToShow) {
    slideToShow =  defineSlideToShow();
    if (currentArr.length === 0) {
        while (count < pets.length) {
            random(currentArr);
            count++;
        }
    }
    if(slideToShow > 2){
        currentArr.push(randomArr(2, 4));
        return currentArr
    }
    return currentArr
  
}

export function startSlider(currentArray) {
    if(!currentArray || currentArr.length === 0){
        if(!currentArray){
            currentArray = fillCurrentArray();
            currentArray.map((el) => currentArr.push(el));
        } 
        fillCurrentArrayIfEmpty(slideToShow);
    }

    if(currentArray || currentArr.length > 0){
        move = setInterval(() => {
            movedSliderLeft();
        }, 2000); 
    }
}

export function stopSlider() {
    if (move) {
        clearInterval(move);
    }
}

export default function movedSliderLeft() {
    stopSlider();
    slideToShow =  defineSlideToShow();
    slidesWidth = slideWidth * slideToShow;
    gap = (sliderContainer.clientWidth - slidesWidth) / slideToShow;
 
    if (currentIndex >= 1 && currentIndex < Math.floor(sliderPetsBlock.length / slideToShow)){
        currentIndex += 1;
        if(slideToShow == 1){
            sliderContainer.style.gap = `clamp(0px, calc((100% - ${slideToShow} * 270px) / 2), 90px)`;
            sliderStep += sliderContainer.clientWidth;
        } else if(slideToShow === 2){
            sliderContainer.style = `gap: clamp(5px, calc((100% - ${slideToShow} * 270px)), 90px); justify-content: space-between`;
            sliderStep += sliderContainer.clientWidth + gap * 2;
        } else {
            sliderStep += sliderContainer.clientWidth + gap * 1.5;
        }       

    } else if(currentIndex >= Math.floor(sliderPetsBlock.length / slideToShow)){
        sliderStep = 0;
        currentIndex = 1;
        currentArr.length = 0;
        count = 0;
        fillCurrentArrayIfEmpty(slideToShow);
    }

    sliderPetsBlock.forEach((el, i) => {
        if (currentArr[i] !== undefined && pets[currentArr[i]] !== undefined) {
            el.setAttribute('data-id', pets[currentArr[i]].id);
            el.addEventListener('click', function(e){
                sliderInfo(e)});
            fillSlide(el, currentArr[i]);
        }

        if(currentIndex == 1){
            el.style.transition = 'transform 0s ease-in-out';
        } 
        if(currentIndex > 1 ){
            el.removeAttribute('style');
        }
        el.style.transform = `translateX(-${sliderStep}px)`;
    }); 

    startSlider(currentArr)
}

export function movedSliderRight() {   
    stopSlider()
    slideToShow =  defineSlideToShow();

    if(slideToShow === 1){
        gapAdd = 0;
    } else if(slideToShow === 2){
        gapAdd = 2;
    } else if(slideToShow === 3){
        gapAdd = 1.5;
    }

    slidesWidth = slideWidth * slideToShow;
    gap = (sliderContainer.clientWidth - slidesWidth) / slideToShow;
    currentArr.length = 0;
    count = 0;

    const totalSlides = Math.floor(sliderPetsBlock.length / slideToShow);

    if(currentIndex === 1){
        currentIndex = totalSlides;
        
        if(slideToShow === 1){
            sliderContainer.style = `gap: ${gap}`;
            sliderStep = -(sliderContainer.clientWidth * (totalSlides - 1)) + gap * (totalSlides);
        } else {
            sliderStep = -((sliderContainer.clientWidth + gap * gapAdd) * (totalSlides - 1) );
        }
    } else if (currentIndex > 1 && currentIndex < totalSlides) {
       
        if(sliderStep >= 0){
            if(slideToShow === 1){
                sliderStep -= (sliderContainer.clientWidth)
            } else {
                sliderStep -= (sliderContainer.clientWidth + gap * gapAdd);
            }
            
        } else {
            sliderStep += (sliderContainer.clientWidth + gap * gapAdd);
        }
        currentIndex -= 1;
       
    } else if(currentIndex === totalSlides){
        currentIndex -= 1;

        if (sliderStep >= 0) {
            if(slideToShow === 1){
                sliderStep -= (sliderContainer.clientWidth)
            } else {
                sliderStep -= (sliderContainer.clientWidth + gap * gapAdd);
            }
        } else if (sliderStep < 0) {
            if(slideToShow === 1){
                sliderStep += sliderContainer.clientWidth;
            } else {
                sliderStep += (sliderContainer.clientWidth + gap * gapAdd);
            }
        }
    }

    sliderPetsBlock.forEach((el, i) => {
        if (currentArr[i] !== undefined && pets[currentArr[i]] !== undefined) {
            el.setAttribute('data-id', pets[currentArr[i]].id);
            el.addEventListener('click', function(e){
                sliderInfo(e)});
            fillSlide(el, currentArr[i]);
        }
       
        if(currentIndex === totalSlides){
            el.style.transition = 'transform 0s ease-in-out';
            
        } else {
            el.removeAttribute('style');
        }

        if(sliderStep > 0){
            el.style.transform = `translateX(-${sliderStep}px)`;
        } else {
            el.style.transform = `translateX(${sliderStep}px)`;
        }
       
    });   
   

    currentArr = fillCurrentArrayIfEmpty(slideToShow)
    startSlider(currentArr);
}






