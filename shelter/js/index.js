
import controlBurgerMenu from "./controlBurgerMenu.js";
import { measurementScreenSize } from "./controlBurgerMenu.js";
import { buttonBurger } from "./constants.js";
  
window.addEventListener('resize', function() {
    measurementScreenSize();
});

buttonBurger.addEventListener('click', controlBurgerMenu);