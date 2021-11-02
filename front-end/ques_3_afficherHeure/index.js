/* 
    ---------------------------Hours-----------------------
    Select the button
    
    Add event to the button
    Select three input h,m,s, and the message
    s++

    if s is equal to 60 then
        initialize s to 0
        m ++
    if m is equal to 60 then
        initialize m to 0
        h++

    if h is equal to 24 then
    initialize h to 0


*/

const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    let seconds = document.querySelector('#seconds').value;
    let minutes = document.querySelector('#minutes').value;
    let hours = document.querySelector('#hours').value;
    const message = document.querySelector('#message');

    seconds++;

    
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    if (hours == 24) {
        hours = 0;
    }
    message.classList = 'alert alert-success text-center mt-2';
    message.textContent = hours + " h " + minutes + ' m ' + seconds +' seconds';

    e.preventDefault();
})

