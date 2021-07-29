/* 
-------------------------------PassWord----------------------------

    demander a l'utilisateur un mdp

    verifier si contien chiffre et lettre
    verifier si il contient un majuscule
    verifier si il contient un miniscule 
    vérifier si il a des caractère spéciaux
    vérifier si il est inférieux a 8

    verifCharacters = hasCharacter(input) === true
    verifNumber = hasNumber === true
    verifUpperCase = hasUpper ==true
    verifSpecialChar = hasSpecialChar ==true
    verifLength = input.len < 8
    mdpStronger;

    if verifCharacters alors 
    mdpStronger += 1
    
    if verifNumber alors 
    mdpStronger += 1
    
    if verifUpperCase alors 
    mdpStronger += 1
    
    if verifSpecialChar alors 
    mdpStronger += 1
    
    if verifLength alors
    mdpstronger -= 1 

    switch(mdpstronger) 
    case 0:
            output Verysecure
    case 1:
            output isSecure
    case 2:
            output meduim
    case 3:
            output not secure
    default:
        output try again




*/
const hasNumber = (myString)=> {
    return /[0-9]/.test(myString);
}

const hasCharacter = (myCharacter)=> {
    return /[a-z]/.test(myCharacter);
}

const hasUpperCase = (myUpperCase)=> {
    return /[A-Z]/g.test(myUpperCase)
}

const hasSpecialCharacters = (mySpecialCharacters) => {
    return /\W/g.test(mySpecialCharacters);
}

const form = document.querySelector('form');

const verifPassWord = (e) => {
    const inputMdp = document.querySelector('#inputMdp');
    const message = document.querySelector('#message');
    const inputValue = inputMdp.value;
    let lowerText;
    let mdpStronger = 0;

    
    lowerText = inputValue.length < 8;

    e.preventDefault();

    

    if (hasCharacter(inputValue)) {
        mdpStronger += 1;
        console.log(mdpStronger, 'Has characters');
        
    }
    if (hasNumber(inputValue)) {
        mdpStronger += 1;
        console.log(mdpStronger, 'has Number');
    }
    if (hasSpecialCharacters(inputValue)) {
        mdpStronger += 1;
        console.log(mdpStronger, 'Has special Characters');
    }
    if (lowerText) {
        mdpStronger -= 1;
        console.log(mdpStronger, 'Has lower text');
    }
    
    switch (mdpStronger) {
        case 3:
            message.classList.add('alert', 'alert-primary', 'text-center');
            message.textContent = 'Very Secure'
            break;
        case 2:
            message.classList.add('alert', 'alert-success', 'text-center');
            message.textContent = 'Is Secure'
            break;
        case 1:
            message.classList.add('alert', 'alert-warning', 'text-center');
            message.textContent = 'Meduim'
            break;
        case 0:
            message.classList.add('alert', 'alert-danger', 'text-center');
            message.textContent = 'Danger, Not Secure'
            break;
    
        default:
            message.classList.add('alert', 'alert-dark', 'text-center');
            message.textContent = 'Try Again';
            break;
    }

}

form.addEventListener('submit', verifPassWord);