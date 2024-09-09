class Pet {
    constructor(species, breed, namePet, age, description, inoculations, diseases, parasites, id, imgSrc){
        this.species = species;
        this.breed = breed;
        this.namePet = namePet;
        this.age = age;
        this.description = description;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
        this.id = id;
        this.imgSrc = imgSrc;
    }
}

const katrine = new Pet('Cat', 'breed', 'Katrine', '5', 'Pretty Cat', 'yes', 'none', 'none', 1, "./img/pets-katrine.png");

const jennifer = new Pet('Dog', 'breed', 'Jennifer', '1', 'Pretty Dog', 'yes', 'none', 'none', 2, "./img/pets-jennifer.png");

const woody = new Pet('Dog', 'breed', 'Woody', '9', 'Pretty Dog', 'yes', 'none', 'none', 3, "./img/pets-woody.png");

const sophia = new Pet('Dog', 'breed', 'Sophia', '1', 'Pretty Dog', 'yes', 'none', 'none', 4, "./img/pets-sophia.png");

const timmy = new Pet('Cat', 'breed', 'Timmy', '8', 'Pretty Cat', 'yes', 'none', 'none', 5, "./img/pets-timmy.png");

const charly = new Pet('Cat', 'breed', 'Charly', '7', 'Pretty Dog', 'yes', 'none', 'none', 6, "./img/pets-charly.png");

const scarlett = new Pet('Cat', 'breed', 'Scarlett', '2', 'Pretty Dog', 'yes', 'none', 'none', 7, "./img/pets-scarlet.png");

const freddie = new Pet('Cat', 'breed', 'Freddie', '3', 'Pretty Cat', 'yes', 'none', 'none', 8, "./img/pets-freddie.png");


export const pets = [katrine, jennifer, woody, sophia, timmy, charly, scarlett, freddie];

export let arrLastSlides = [];