const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function cubed(num) {
    return num * num * num;
}

function circumferenceFromRadius (num) {
    const pi = 3.14;
    return ((num * 2) * pi).toFixed(2);
};

function circumferenceFromDiameter (num) {
    return (num * 3.14).toFixed(2);
}

function rtCubed (num) {
    return Math.cbrt(num).toFixed(2);
}
function factorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}

function squared(num) {
    return num * num
}

function rtSquare(num) {
    return Math.sqrt(num).toFixed(2);
}



input.onchange = function () {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.innerHTML = `${num}  squared is  ${squared(num)}. <br>
            ${num} squared Root is ${rtSquare(num)}. <br>
            ${num} the circumference is ${circumferenceFromRadius(num)} from Radius. <br>
            ${num} the circumference is ${circumferenceFromDiameter(num)} from Diameter. <br>
            ${num} cubed is ${cubed(num)}. <br>
            ${num} cubed root is ${rtCubed(num)}. <br>
            ${num} factorial is ${factorial(num).toFixed(2)}.`;
    }
};