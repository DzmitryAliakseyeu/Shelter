import { buttonBackPage, buttonEndPage, buttonNextPage, buttonStartPage, sliderPetsBlock } from "./constants.js";
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

sliderPetsBlock.forEach((el, i) => {
    console.log(mainArr[pageCount - 1][i])
   fillCard(el, mainArr[pageCount - 1][i]);
})

buttonNextPage.addEventListener('click', ()=>{
    // if(pageCount === mainArr.length){
        
    //     buttonNextPage.style = 'background-image: url(../img/button_paginator_inactive_last.svg);  transform: rotate(180deg); transition: 0s';
    //     console.log('pageCount === 6')
       
    // } 
    
    if(pageCount < mainArr.length){
        pageCount += 1;
        if(pageCount === mainArr.length){
            console.log('disable rightt button')
            buttonNextPage.style = 'background-image: url(../img/button_paginator_inactive_last.svg);  transform: rotate(180deg); transition: 0s';
            buttonEndPage.style = 'background-image: url(../img/button_paginator_inactive_start.svg);  transform: rotate(180deg); transition: 0s'
            console.log('pageCount === 6');

           
        } 
        
    }

    

    textPagesCount.innerText = pageCount;
    console.log(pageCount)
    console.log('set text')
    sliderPetsBlock.forEach((el, i) => {
       fillCard(el, mainArr[pageCount - 1][i]);
    })
    // console.log(pageCount);
    // console.log(sliderPetsBlock.length)

    // if(pageCount > 1){
        buttonBackPage.style = 'background-image: url(../img/button_paginator_next_active.svg);  transform: rotate(180deg); transition: 0s';
        buttonStartPage.style = 'background-image: url(../img/button_paginator_next_end.svg);  transform: rotate(180deg); transition: 0s';
    // }

    
})

buttonBackPage.addEventListener('click', ()=>{
    if(pageCount - 1 === 1){
        
        buttonBackPage.removeAttribute('style');
        buttonBackPage.style = 'transition: 0s'
        buttonStartPage.removeAttribute('style');
         buttonStartPage.style = 'transition: 0s';
        //   buttonNextPage.removeAttribute('style');
        //   buttonNextPage.style = 'transition: 0s';
    }

    if(pageCount > 1){
    console.log(pageCount)
        pageCount -= 1;
        if(pageCount === mainArr.length - 1){
            console.log('remove attr')
            buttonNextPage.removeAttribute('style');
            buttonNextPage.style = 'transition: 0s';
            buttonEndPage.removeAttribute('style');
            buttonEndPage.style = 'transition: 0s';
        }
        console.log('count - 1')
        textPagesCount.innerText = pageCount;
        sliderPetsBlock.forEach((el, i) => {
            console.log('fill');
            console.log(pageCount);
            console.log(mainArr)
            console.log(mainArr[pageCount])

        fillCard(el, mainArr[pageCount-1][i]);
        })
        console.log(pageCount);
    }

   
    
    
})

console.log(buttonNextPage)