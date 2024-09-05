import { sliderPetsBlock } from "./constants.js";
import randomArr from "./randomNumber.js";
import { random } from "./slider.js";

export function generateSlidesArray(){
    let count = 0;
    let mainArr = [];
    let pageArr = [];
    let randomNumber = 0;
 
    while(count <= 8){
        randomNumber = randomArr(0, sliderPetsBlock.length - 1);
       console.log(pageArr)
        console.log(randomNumber);
        if(count === 8){
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
        if (count > 8) {
            break;
        }
    }
}