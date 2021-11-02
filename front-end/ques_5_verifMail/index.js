/* 
    Selectionner l'input 

    convertir le string en subString tableaux

    parcourir le tableaux 
        verifier si @ et . existe 
        verifier l'index de @ et plus petit que le .
    
    
    
    Selectionner l'input 
    
    verifier l'existance de  @ et .  
        
    si @ et . exist alors 
        verifier si index de @ est plus petit que l'index (.)


*/

form = document.querySelector('form');

form.addEventListener('keydown',verifierMail);


function verifierMail() {
    const inputText = document.querySelector('#inputText');
    const validationInputText = document.querySelector('#validationInputText');
    let textValue = inputText.value;
    let verifArrobase = textValue.includes('@');
    let verifPoint = textValue.includes('.');
    let posiArrobase = textValue.indexOf('@');
    let posiPoint = textValue.lastIndexOf('.');

    let c1 = verifPoint && verifArrobase && posiArrobase < posiPoint;

    if (c1) {
        inputText.classList.remove('is-invalid');
        inputText.classList.add('is-valid');
        validationInputText.classList = 'valid-feedback';
        validationInputText.textContent = "Looks good!";
    } else {
        inputText.classList.remove('is-valid');
        inputText.classList.add('is-invalid');
        validationInputText.classList = 'invalid-feedback';
        validationInputText.textContent = "Please provide a valid E-mail .";
    }

}