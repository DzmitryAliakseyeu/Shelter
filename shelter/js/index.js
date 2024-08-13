function controlBurgerMenu(){
    if(document.querySelector('.header')){
        const header = document.querySelector('.header');
        const buttonBurger = document.querySelector('.burger__nav');
        if(!document.querySelector('.rotate')){
            buttonBurger.classList.remove('nonrotate')
            buttonBurger.classList.add('rotate');
        } else {
            buttonBurger.classList.remove('rotate');
            buttonBurger.classList.add('nonrotate')
        }
    }
}