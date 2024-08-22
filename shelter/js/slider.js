import {buttonArrowLeft, buttonArrowRight, sliderContainer, sliderPetsBlock} from "./constants.js";
import fillSlide from "./fillSlide.js";
import { arrLastSlides, pets } from "./objects.js";
import randomArr from "./randomFunction.js";
import removeSliderBlock from "./removeSliderBlock.js";
import { addNewSliderBlock } from "./renderNewSliderBlock.js";

// const sliderBlock = document.querySelector('.slider__pets-block');
// let currentIndex = 0;
// let slidesToShow = 3;
// const totalSlides = sliderPetsBlock.length;

// const slideWidth = sliderPetsBlock[0].clientWidth;

// export default function goToSlide(index) {
 
//     if(index < 0){
//         currentIndex = totalSlides - slidesToShow;
//     } else if(index > totalSlides - slidesToShow){
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//         const offset = -currentIndex * slideWidth;
//         sliderBlock.style.transform = `translateX(${offset}px)`;
//     }
// }

// buttonArrowLeft.addEventListener('click',  goToSlide(currentIndex + slidesToShow));
// buttonArrowRight.addEventListener('click', goToSlide);

let slideToShow = 3;
let slideWidth = sliderPetsBlock[0].clientWidth;
let slidesWidth = slideWidth * slideToShow;
console.log(slidesWidth)
let gap = (sliderContainer.clientWidth - slidesWidth) / 2;
// let sliderStep = slidesWidth + gap * 3;
let sliderStep = 0;
let positionSlider = 0;
let currentIndex = 1;
let totalSlides = sliderPetsBlock.length;
// console.log(gap);
// console.log(slidesWidth);
// console.log(sliderStep);
let randomNumber = 0;
let currentArr = [];
let count  = 0;

let random = () => {
    do {
        randomNumber = randomArr(0, pets.length-1);
    } while (currentArr.includes(randomNumber) || arrLastSlides.includes(randomNumber));
    currentArr.push(randomNumber);
}

export default function movedSliderLeft() {

   if(currentArr.length === 0){
    console.log('currentArr length 0')
        while(count < pets.length){
            random();
            count ++
        }
    currentArr.push(randomArr(0, 2));
   }
 
     if (currentIndex >= 1 && currentIndex < 3){
        sliderStep += slidesWidth + gap * 3;
        currentIndex += 1;
    } else if(currentIndex >= 3){
        sliderStep = 0;
        currentIndex = 1;
        currentArr.length = 0;
        count = 0;
        if(currentArr.length === 0){
            console.log('currentArr length 0')
                while(count < pets.length){
                    random();
                    count ++
                }
            currentArr.push(randomArr(0, 2));
        }

    }

    sliderPetsBlock.forEach((el, i) => {
        fillSlide(el, currentArr[i]);

        if(currentIndex == 1){
            el.style.transition = 'transform 0s ease-in-out';
        } 
        if(currentIndex > 1 ){
            el.removeAttribute('style');
        }
        el.style.transform = `translateX(-${sliderStep}px)`;
    });   
}

export function movedSliderRight() { 
   
    console.log('step1')
    console.log(sliderStep);   
    sliderStep -= slidesWidth + gap * 3;
    console.log(sliderStep);  
    console.log('step2') 
    sliderPetsBlock.forEach((el) => {
        console.log('step3')
        el.style.transform = `translateX(-${sliderStep}px)`;
        
    });
    console.log(sliderStep); 
    console.log('step4')
}






