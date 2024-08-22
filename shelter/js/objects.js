class Pet {
    constructor(species, namePet, age, description, inoculations, diseases, parasites, id, imgSrc){
        this.species = species;
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

const katrine = new Pet('cat', 'Katrine', '5', 'Pretty cat', 'yes', 'none', 'none', 1, "./img/pets-katrine.png");

const jennifer = new Pet('dog', 'Jennifer', '1', 'Pretty dog', 'yes', 'none', 'none', 2, "./img/pets-jennifer.png");

const woody = new Pet('dog', 'Woody', '9', 'Pretty dog', 'yes', 'none', 'none', 3, "./img/pets-woody.png");

const sophia = new Pet('dog', 'Sophia', '1', 'Pretty dog', 'yes', 'none', 'none', 4, "./img/pets-sophia.png");

const timmy = new Pet('cat', 'Timmy', '8', 'Pretty cat', 'yes', 'none', 'none', 5, "./img/pets-timmy.png");

const charly = new Pet('cat', 'Charly', '7', 'Pretty dog', 'yes', 'none', 'none', 6, "./img/pets-charly.png");

const scarlett = new Pet('cat', 'Scarlett', '2', 'Pretty dog', 'yes', 'none', 'none', 7, "./img/pets-scarlet.png");

const freddie = new Pet('cat', 'Freddie', '3', 'Pretty cat', 'yes', 'none', 'none', 8, "./img/pets-freddie.png");


export const pets = [katrine, jennifer, woody, sophia, timmy, charly, scarlett, freddie];

export let arrLastSlides = [];