const attempt = document.querySelector('#attempt');
const message = document.querySelector('#message');
const videoElem = document.querySelector('#video');
const btn = document.querySelector('#btn');
let attemptNb = 10;
let priceMystere = Math.floor(Math.random() * 100) + 1;

const imgObject = [{
        name: 'Chaise',
        imgFile: './image-juste-prix/chaise.png',
        imgAlt: 'chaise'
    },
    {
        name: 'Costume Halowen',
        imgFile: './image-juste-prix/costume-Haloween.png',
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
const myImg = document.querySelector('img');
const imgTitle = document.querySelector('#imgTitle');
const discription = document.querySelector('#discription');

let imgRandom = Math.floor(Math.random() * 5);
myImg.src = imgObject[imgRandom].imgFile;
myImg.alt = imgObject[imgRandom].imgAlt;
imgTitle.textContent = imgObject[imgRandom].name;
discription.textContent = `Proposer un prix entre 1 et 100 €. Tantez votre chance et Gangez : ${imgObject[imgRandom].name} `;
attempt.textContent = `Il vous reste ${attemptNb} tentatives`



const verifierProposition = (e) => {
    const inputPrice = document.querySelector('#inputPrice').value;
    if (attemptNb == 0) {
        attempt.textContent = `Il vous reste ${attemptNb} tentatives`
        message.classList.add('alert', 'alert-danger', 'text-center');
        message.innerHTML = `Désolé, vous avez perdu ! <br> Le juste prix était de ${priceMystere} €`;
        btn.disabled = true;
        let node = document.createElement('iframe');
        node.setAttribute('id', 'Player');
        node.setAttribute('title', 'YouTube video player');
        node.setAttribute('frameborder', '0');
        node.setAttribute('allowfullscreen', '1');
        node.setAttribute('allow', 'autoplay');
        node.setAttribute('width', '640');
        node.setAttribute('height', '264');
        node.setAttribute('src',"https://www.youtube.com/embed/4QXYlpDqD0g");
        document.getElementById('video').append(node);
    } else {
        message.classList.add('alert', 'alert-success', 'text-center', 'mt-5');
        if (inputPrice > priceMystere) {
            message.textContent = 'C\'est moins !';
            attemptNb--;
            attempt.textContent = `Il vous reste ${attemptNb} tentatives`
        }
        if (inputPrice < priceMystere) {
            message.textContent = 'C\'est plus !';
            attemptNb--;
            attempt.textContent = `Il vous reste ${attemptNb} tentatives`
        }
        if (inputPrice == priceMystere) {
            let node = document.createElement('iframe');
            node.setAttribute('id', 'Player');
            node.setAttribute('title', 'YouTube video player');
            node.setAttribute('frameborder', '0');
            node.setAttribute('allowfullscreen', '1');
            node.setAttribute('allow', 'autoplay');
            node.setAttribute('width', '640');
            node.setAttribute('height', '264');
            node.setAttribute('src',"https://www.youtube.com/embed/4Csi0U8c-LA");
            document.getElementById('video').append(node);
            message.textContent = 'Bravo vous avez gagné !';
            attemptNb--;
            attempt.textContent = `En ${attemptNb} tentatives`
            btn.disabled = true;
        }
    }
    e.preventDefault();
}
btn.addEventListener('click', verifierProposition, false);