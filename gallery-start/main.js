const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let index = 1; index < 6; index++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/pic" + [index] +".jpg");
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */