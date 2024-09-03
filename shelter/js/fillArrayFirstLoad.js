// import { currentArrFirst } from "./index.js";
import { pets } from "./objects.js";
import randomArr from "./randomFunction.js";
import { random } from "./slider.js";



export function fillCurrentArray(slideToShow){
    let arr = [];
    let count = 0;
    if(arr.length === 0){
        console.log('arr length 0')
        while(count < pets.length){
            arr = random(arr);
            count ++;
        }
        if(slideToShow > 2){
            arr.push(randomArr(2, 4));
            return arr
        }
    }
    return arr
}