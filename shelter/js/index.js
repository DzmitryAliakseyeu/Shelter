
import controlBurgerMenu from "./controlBurgerMenu.js";
import { measurementScreenSize } from "./controlBurgerMenu.js";
import { buttonArrowLeft, buttonArrowRight, buttonBurger } from "./constants.js";
import goToSlide, { movedSliderRight } from "./slider.js";
import movedSliderLeft from "./slider.js";
import { sliderPetsBlock } from "./constants.js";

// setGapSliderPetsBlock();
  
window.addEventListener('resize', function() {
    measurementScreenSize();
    // setGapSliderPetsBlock();
});

buttonBurger.addEventListener('click', controlBurgerMenu);

// sliderPetsBlock.forEach((el, i) => {
//     el.setAttribute('id', i+1);
// })
    // console.log(sliderPetsBlock)
    // sliderPetsBlock.style.transform = 'translateX(0%)';



buttonArrowLeft.addEventListener('click', movedSliderRight);
buttonArrowRight.addEventListener('click', movedSliderLeft);

setInterval(()=>{
    console.log('move')
    movedSliderLeft();
   
}, 2000);


