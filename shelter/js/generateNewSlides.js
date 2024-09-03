export default function generateNewSlides() {
    currentArr = [];
    while (currentArr.length < slideToShow) {
        let randomIndex = randomArr(0, pets.length - 1);
        if (!currentArr.includes(randomIndex) && !lastArr.includes(randomIndex)) {
            currentArr.push(randomIndex);
        }
    }
    lastArr = [...currentArr];
}