import { buttonBackPage, buttonNextPage, buttonStartPage, sliderPetsBlock } from "./constants.js";
import { fillCard } from "./fillCard.js";
import fillSlide from "./fillSlide.js";
import { generateSlidesArray } from "./generateArraySlides.js";
import { pets } from "./objects.js";
import { sliderInfo } from "./popup.js";

let textPagesCount = document.querySelector('.navigation-block__count');
let pageCount = 1;
let quantityPage;

let mainArr = generateSlidesArray();
console.log(mainArr);

buttonNextPage.addEventListener('click', ()=>{
    pageCount += 1;
    // let textPagesCount = document.querySelector('.navigation-block__count');
    textPagesCount.innerText = pageCount;
    sliderPetsBlock.forEach((el, i) => {
       fillCard(el, mainArr[pageCount][i]);
    })
    console.log(pageCount);
    console.log(sliderPetsBlock.length)

    if(pageCount >= sliderPetsBlock.length - 1){
        console.log('this')
         buttonNextPage.style = 'background-image: url(../img/button_paginator_inactive_last.svg);  transform: rotate(180deg); transition: 0s';
    }

    if(pageCount > 1){
        buttonBackPage.style = 'background-image: url(../img/button_paginator_next_active.svg);  transform: rotate(180deg); transition: 0s';
        buttonStartPage.style = 'background-image: url(../img/button_paginator_next_end.svg);  transform: rotate(180deg); transition: 0s';
    }

    
})

buttonBackPage.addEventListener('click', ()=>{
    if(pageCount === 1){
        
        buttonBackPage.removeAttribute('style');
        buttonBackPage.style = 'transition: 0s'
        buttonStartPage.removeAttribute('style');
         buttonStartPage.style = 'transition: 0s';
    }

    if(pageCount > 1){
        pageCount -= 1;
    
        textPagesCount.innerText = pageCount;
        sliderPetsBlock.forEach((el, i) => {
           fillCard(el, mainArr[pageCount][i]);
        })
        console.log(pageCount);
    }
    
    
})

console.log(buttonNextPage)