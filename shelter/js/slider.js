export default function setGapSliderPetsBlock() { 
   const sliderPetsBlock = document.querySelector('.slider__pets-block');
   console.log(sliderPetsBlock.clientWidth);
   const sliderPetsBlockElements = document.querySelectorAll('.slider__block');
   console.log(sliderPetsBlockElements);

//    sliderPetsBlockElements.forEach((el)=> el.style.left = el.clientWidth + el.clientWidth)
    // if(window.innerWidth >= 1261){
    //     return sliderPetsBlock.style.gap = '90px';
    // } else if(window.innerWidth <= 1260){
    //     return sliderPetsBlock.style.gap = '59px';
    // }


}