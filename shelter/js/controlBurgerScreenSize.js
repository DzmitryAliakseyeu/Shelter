export function measurementScreenSize() {
    console.log('control')
    const windowInnerWidth = window.innerWidth;
    if(windowInnerWidth >= 768){
        console.log(windowInnerWidth);
        openMenu = false;
        if( document.querySelector('.close-menu')){
            document.querySelector('.close-menu').classList.remove('close-menu');
        }

        if(document.querySelector('.menu')){
            document.querySelector('.menu').classList.remove('menu');
        }
        
        if(document.querySelector('.rotate')){
            document.querySelector('.rotate').classList.remove('rotate');
        }

        if(document.querySelector('.nonrotate')){
            document.querySelector('.nonrotate').classList.remove('rotate');
        }
    }
}