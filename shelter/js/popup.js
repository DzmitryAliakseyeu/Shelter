import { pets } from "./objects.js";
import { startSlider, stopSlider } from "./slider.js";



export function sliderInfo(e){

    document.addEventListener('click', (e) => {
        if(e.target.className === 'modal-container'){
            if(document.querySelector('.modal-container')){
                document.querySelector('.modal-container').remove()
            }
        
            if(document.body.className === 'no-scroll'){
                document.body.classList.remove('no-scroll');
            }
        }
    })

    if(document.querySelector('.modal-container')){
        document.querySelector('.modal-container').remove();
    }

    const elID = e.currentTarget.dataset.id - 1;
    const currentObject = pets[elID];
    const containerPets = document.querySelector('.container__pets');
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    containerPets.prepend(modalContainer);
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modalContainer.prepend(modal);

    const buttonCloseModal = document.createElement('div');
    buttonCloseModal.classList.add('button-close-modal');
    modal.prepend(buttonCloseModal);
   

    const sliderContent = document.createElement('div');
    sliderContent.classList.add('slider-content');
    modal.append(sliderContent);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    sliderContent.prepend(imageContainer);

    const imgModal = document.createElement('img');
    imgModal.classList.add('image-modal');
    if(window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('index.html#') || window.location.pathname.includes('index.html?')){
        imgModal.setAttribute('src', currentObject.imgSrc)
    } else {
        imgModal.setAttribute('src', '.' + currentObject.imgSrc)
    }
  
    imageContainer.prepend(imgModal);

    const sliderTextContent = document.createElement('div');
    sliderTextContent.classList.add('text-container');
    sliderContent.append(sliderTextContent);

    const naming = document.createElement('div');
    naming.classList.add('naming');
    sliderTextContent.append(naming);

    const namePet = document.createElement('h3');
    naming.prepend(namePet);
    namePet.innerText = currentObject.namePet;
    const species = document.createElement('h4');
    naming.append(species);
    species.innerText = currentObject.species + ' - ' + currentObject.breed;

    const description = document.createElement('p');
    sliderTextContent.append(description);
    description.innerText = currentObject.description;

    const additionalDescription = document.createElement('ul');
    additionalDescription.classList.add('add-descr');
    sliderTextContent.append(additionalDescription);

    for(let i = 0; i < 4; i += 1){
        const point = document.createElement('li');
        point.classList.add('add-descr_point');
        additionalDescription.append(point);
        switch(i){
            case 0:
                point.innerHTML = '<span><b>Age: </b>' + currentObject.age + '</span>';
                break;
            case 1:
                point.innerHTML = '<span><b>Inoculations: </b>' + currentObject.inoculations +'<span>';
                break;
            case 2:
                point.innerHTML = '<span><b>Diseases: </b>' + currentObject.diseases + '<span>';
                break;
            case 3:
                point.innerHTML = '<span><b>Parasites: </b>' + currentObject.parasites + '<span>';
                break;
            default:
        }
    }

    document.body.classList.add('no-scroll');
    if(window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('index.html#') || window.location.pathname.includes('index.html?')){
        buttonCloseModal.addEventListener('click', ()=> {
            const modalContainer = document.querySelector('.modal-container');
            modalContainer.remove();
            if(document.body.className === 'no-scroll'){
                document.body.classList.remove('no-scroll');
            }
            startSlider()
            
           
        })
        stopSlider();
    } else {
        buttonCloseModal.addEventListener('click', ()=> {
            const modalContainer = document.querySelector('.modal-container');
            modalContainer.remove();
            if(document.body.className === 'no-scroll'){
                document.body.classList.remove('no-scroll');
            }
        })
    }
}