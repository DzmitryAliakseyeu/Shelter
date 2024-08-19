
import controlBurgerMenu from "./controlBurgerMenu.js";
import { measurementScreenSize } from "./controlBurgerMenu.js";
import { buttonBurger } from "./constants.js";
import setGapSliderPetsBlock from "./slider.js";

setGapSliderPetsBlock();
  
window.addEventListener('resize', function() {
    measurementScreenSize();
    setGapSliderPetsBlock();
});

buttonBurger.addEventListener('click', controlBurgerMenu);