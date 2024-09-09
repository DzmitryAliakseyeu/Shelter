import { sliderPetsBlock } from "./constants.js";
import randomArr from "./randomNumber.js";
import { random } from "./slider.js";

export function generateSlidesArray(quantityCards){
    
    let count = 0;
    let mainArr = [];
    let pageArr = [];
    let randomNumber = 0;
    let quantityPages = 48 / quantityCards;
 
    while(count <= quantityPages){
        randomNumber = randomArr(0, sliderPetsBlock.length - 1);
        if(count === quantityPages){
            return mainArr;
        }
        if(!pageArr.includes(randomNumber)){
            pageArr.push(randomNumber);
            if(pageArr.length === sliderPetsBlock.length){
                mainArr.push(pageArr);
                pageArr = [];
                count += 1;
            }
        }
        if (count > quantityPages) {
            break;
        }
    }
}