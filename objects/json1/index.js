const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
    .then(response => response.text())
    .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here
    const cats = JSON.parse(catString);

    for (let i = 0; i < cats.length; i++) {
        for (let j = 0; j < cats[i].kittens.length; j++) {
            total++;
            if (cats[i].kittens[j].gender === 'm') {
                male++;
            }
        }
        
        if (i === cats.length -1) {
            motherInfo += ' and ' + cats[i].name + '.';
        } else {
            motherInfo += cats[i].name + ', ';
        }
    }
    kittenInfo  = `There are ${ total } kittens in total, ${ male } males and ${ total - male } females.`;


    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);