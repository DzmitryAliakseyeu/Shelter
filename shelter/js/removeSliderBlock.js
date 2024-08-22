export default function removeSliderBlock(){
    const sliderBlock = document.querySelectorAll('.slider__block');
    console.log(sliderBlock)

    if(sliderBlock.length >= 3){
        
        for(let i = 0; i < 6; i += 1 ){

            if(i >= 3){
                // sliderBlock[i].style.transform = `translateX(0px)`
                // console.log(sliderBlock[i])
                // sliderBlock[i].remove();
            }
           

        }
    }
    
}