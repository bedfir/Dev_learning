/* 
                ------------Monnaie a rendre---------------
    
    Creer trois variable pieces oneEuro, fiveEuro, tenEuro.
    creer variable rendu
    recupérer les input cash et price

    returnValue = cash - price
    
    tantque returnvalue est superieur a 10
        returnValue -= 10
        tenEuro++
    Fin Tantque
    tantque returnvalue est superieur a 5
        returnValue -= 5
        fiveEuro++
    Fin Tantque

    oneEuro = returnValue

    c1 = oneEuro > 0 && FiveEuro > 0 && tenEuro > 0 
    c2 = 

*/


const btn = document.querySelector('#btn-form');

btn.addEventListener('click', rendreMonnaie);




function rendreMonnaie(e) {
    const inputCash = document.querySelector('#inputCash').value;
    const inputPrice = document.querySelector('#inputPrice').value;
    const message = document.querySelector('#message');
    let tenEuro = 0; 
    let fiveEuro = 0;
    let oneEuro = 0;
    let returnValue;
    e.preventDefault();
    returnValue = inputCash - inputPrice;
    while (returnValue >= 10) {
        returnValue-= 10;
        tenEuro+= 1 ;
    }
    while (returnValue >= 5) {
        returnValue-= 5;
        fiveEuro++;
    }
    oneEuro = returnValue;

    
    message.classList = 'alert alert-success text-center';
    message.textContent = `Voici les pieces a rendre : ${tenEuro} Dix €, ${fiveEuro} Cinq €, ${oneEuro}€`;
}