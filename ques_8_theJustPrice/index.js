//creer un objet et stocke les noms et et les images de chaque objet.
// creer un prix random entre 1 et 100 
//Créer un boucle for pour Afficher les image, nom randomly
// créer un boucle tantque tentative < 10 
//  l'utilisateur rentre un nombre
//      Si le nombre == au prix Alors
//          Affiche la prochaine image 
//      Sinon Si tentative = 10
//          Affiche vous avez perdu avec une image et son de loser 
//      Sinon 
//          Affiche il vous reste tentative -10
    /* const imgObject = [{
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
    const myImg = document.querySelector('#myImg');
    const imgTitle = document.querySelector('#imgTitle');
    const discription = document.querySelector('#discription');
    myImg.src = imgObject[0].imgFile;
    myImg.alt = imgObject[0].imgAlt;
    imgTitle.textContent = imgObject[0].name;
    discription.textContent = `Trouver le prix de l'objet ${imgObject[0].name} entre 1 ET 100 €, Attention Vous avez seulement 10 tentative pour 5 objet a trouver !`;

    document.querySelector('.theJustPrice').addEventListener('click', theJustPriceGame = (e) => {
        const inputPrice = document.querySelector('#inputPrice').value;
        let priceValue = Math.floor(Math.random() * 100) + 1;
        let attempt = 0;
        let findThePrice = inputPrice == priceValue;
        let maxAttempt = attempt < 10;
        let nextImg = 0;
        let winner = findThePrice == imgObject.length;

        while (maxAttempt) {
            if (findThePrice) {
                myImg.src = imgObject[nextImg].imgFile;
                myImg.alt = imgObject[nextImg].imgAlt;
                imgTitle.textContent = imgObject[nextImg].name;
                nextImg++;
            }
            if (winner) {
                break;
            }
            attempt++;
        }



        e.preventDefault();
    }) */

/*     for(i = 0; i < priceRandom.length; i++) {
        let items = priceRandom[i];
    } */