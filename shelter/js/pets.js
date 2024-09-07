import { buttonBackPage, buttonEndPage, buttonNextPage, buttonStartPage, sliderPetsBlock } from "./constants.js";
import { fillCard } from "./fillCard.js";
import { generateSlidesArray } from "./generateArraySlides.js";

let textPagesCount = document.querySelector('.navigation-block__count');
let pageCount = 1;

let mainArr = generateSlidesArray();

sliderPetsBlock.forEach((el, i) => {
   fillCard(el, mainArr[pageCount - 1][i]);
})

buttonNextPage.addEventListener('click', () => {
    
    if(pageCount < mainArr.length){
        pageCount += 1;
        if(pageCount === mainArr.length){
            buttonNextPage.style = 'background-image: url(../img/button_paginator_inactive_last.svg);  transform: rotate(180deg); transition: 0s';
            buttonEndPage.style = 'background-image: url(../img/button_paginator_inactive_start.svg);  transform: rotate(180deg); transition: 0s';
        }
    }

    textPagesCount.innerText = pageCount;
  
    sliderPetsBlock.forEach((el, i) => {
       fillCard(el, mainArr[pageCount - 1][i]);
    })
   
    buttonBackPage.style = 'background-image: url(../img/button_paginator_next_active.svg);  transform: rotate(180deg); transition: 0s';
    buttonStartPage.style = 'background-image: url(../img/button_paginator_next_end.svg);  transform: rotate(180deg); transition: 0s';    
})

buttonBackPage.addEventListener('click', ()=>{
    if(pageCount - 1 === 1){
        buttonBackPage.removeAttribute('style');
        buttonBackPage.style = 'transition: 0s'
        buttonStartPage.removeAttribute('style');
         buttonStartPage.style = 'transition: 0s';
    }

    if(pageCount > 1){
        pageCount -= 1;
        if(pageCount === mainArr.length - 1){
            buttonNextPage.removeAttribute('style');
            buttonNextPage.style = 'transition: 0s';
            buttonEndPage.removeAttribute('style');
            buttonEndPage.style = 'transition: 0s';
        }

        textPagesCount.innerText = pageCount;
        sliderPetsBlock.forEach((el, i) => {
            fillCard(el, mainArr[pageCount-1][i]);
        })
    }
})

buttonStartPage.addEventListener('click', ()=>{
    pageCount = 1;

    buttonNextPage.removeAttribute('style');
    buttonNextPage.style = 'transition: 0s';
    buttonEndPage.removeAttribute('style');
    buttonEndPage.style = 'transition: 0s';
   
    buttonBackPage.removeAttribute('style');
    buttonBackPage.style = 'transition: 0s'
    buttonStartPage.removeAttribute('style');
    buttonStartPage.style = 'transition: 0s';
  
    textPagesCount.innerText = pageCount;
    sliderPetsBlock.forEach((el, i) => {
        fillCard(el, mainArr[pageCount-1][i]);
    })
})

buttonEndPage.addEventListener('click', ()=>{
    pageCount = mainArr.length;

    buttonBackPage.style = 'background-image: url(../img/button_paginator_next_active.svg);  transform: rotate(180deg); transition: 0s';
    buttonStartPage.style = 'background-image: url(../img/button_paginator_next_end.svg);  transform: rotate(180deg); transition: 0s';
    buttonNextPage.style = 'background-image: url(../img/button_paginator_inactive_last.svg);  transform: rotate(180deg); transition: 0s';
    buttonEndPage.style = 'background-image: url(../img/button_paginator_inactive_start.svg);  transform: rotate(180deg); transition: 0s';
  
    textPagesCount.innerText = pageCount;
    sliderPetsBlock.forEach((el, i) => {
        fillCard(el, mainArr[pageCount-1][i]);
    })
});