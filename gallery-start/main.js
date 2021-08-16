const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let index = 1; index < 6; index++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/pic" + [index] + ".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
}


/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    let attribute = btn.getAttribute('class');
    if (attribute === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}