const theJustPrice = document.querySelector('#theJustPrice');
const inputPrice = document.querySelector('#inputPrice');
const myImg = document.querySelector('#myImg');
const imgTitle = document.querySelector('#imgTitle');

let count = 0;
const imgObject = [{
        name: 'Chaise',
        imgFile: './image-juste-prix/chaise.png',
        imgAlt: 'chaise'
    },
    {
        name: 'Costume Halowen',
        imgFile: './image-juste-prix/Costume-Halowen.png',
        imgAlt: 'Costume-Halowen'
    },
    {
        name: 'Grill',
        imgFile: './image-juste-prix/Grill.png',
        imgAlt: 'Grill'
    },
    {
        name: 'Guitare',
        imgFile: './image-juste-prix/Guitare.png',
        imgAlt: 'Guitare'
    },
    {
        name: 'Sac a Main',
        imgFile: './image-juste-prix/sac-a-main.png',
        imgAlt: 'sac a main'
    },
];
myImg.src = imgObject[0].imgFile;
    myImg.alt = imgObject[0].imgAlt;
    imgTitle.textContent = imgObject[0].name;
    discription.textContent = `Trouver le prix de l'objet ${imgObject[0].name} entre 1 ET 100 €, Attention Vous avez seulement 10 tentative pour 5 objet a trouver !`;

const theJustPriceGame = (e) => {

    const discription = document.querySelector('#discription');
    const message = document.querySelector('#message');
    let priceValue = Math.floor(Math.random() * 100) + 1;
    count++;
    e.preventDefault();
    let findThePrice = inputPrice.value == priceValue;
    let maxAttempt = count < 10;
    let winner = findThePrice == imgObject.length;
    let nextImg = 0;

    while (count < 10) {
        
        if (findThePrice) {
            myImg.src = imgObject[nextImg].imgFile;
            myImg.alt = imgObject[nextImg].imgAlt;
            imgTitle.textContent = imgObject[nextImg].name;
            nextImg++;
            console.log("je trouve");
        } else if (winner) {
            console.log('je gagne');
        } else {
            console.log('je perd');
        }
        console.log(count ++);
    }
    

}
theJustPrice.addEventListener('submit', theJustPriceGame);