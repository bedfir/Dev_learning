const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function () {
    const choice = select.value;
    // ADD SWITCH STATEMENT
    switch (choice) {
        case 'White':
                update('white', 'black');
            break;
        case 'Black':
                update('black', 'White');
            break;
        case 'Yellow':
                update('yellow', 'darkgray');
            break;
        case 'Purple':
                update('Purple', 'white');
            break;
        case 'Psychedelic':
                update('lime', 'purple');
            break;
    
        default:
            break;
    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}