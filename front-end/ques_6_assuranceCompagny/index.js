/*
        Procédure d'assurance

        age < 25 + perm < 2 = rouge ==> acci 0 
        
        age < 25 + perm > 2 OU age > 25 + perm < 25 = orange ==> acci 0
        
        age > 25 + perm > 2 = vert ==> acci 0
        
        junior = age < 25
        jeuneConducteur = perm < 2 
        conditionAssurance = dureeAssurance > 1 
        pointMalus = nbAccident

        si junior alors 
            point malus + 1
        si jeuneConducteur alors
            point malus + 1 
        si conditionAssurance alors 
            point malus - 1 
        
        selon le cas point malus 
        case -1 :
                tarif blue
                break
        case 0 :
                tarif vert
                break
        case 1 :
                tarif orange
                break
        case 2 :
                tarif rouge
                break;
        default : 
            vous êtes réfusee
            break;






    
    demander a l'utilisateur de rentrer l'age et nbAnnePermis et nbAccident


*/

const form = document.querySelector('form');



const assurance = (e)=> {
    const inputAge = document.querySelector('#inputAge');
    const inputAnneePermis = document.querySelector('#inputAnneePermis');
    const inputFidelité = document.querySelector('#inputFidelité');
    const inputAccident = document.querySelector('#inputAccident');
    const message = document.querySelector('#message');

    let estJunior = inputAge.value < 25;
    let jeuneConducteur = inputAnneePermis.value < 2;
    let conditionAssurance = inputFidelité.value > 1;
    let pointMalus = Number(inputAccident.value);
    e.preventDefault();
    
    
    if (estJunior) {
        pointMalus += 1;
    }
    if (jeuneConducteur) {
        pointMalus += 1;
    }
    if (conditionAssurance) {
        pointMalus -= 1;
    }
    message.removeAttribute('class');
    switch (pointMalus) {
        case -1:
            message.classList.add('alert', 'alert-primary', 'text-center');
            message.textContent = 'Tarif blue'
            break;
        case 0:
            message.classList.add('alert', 'alert-success', 'text-center');
            message.textContent = 'Tarif vert'
            break;
        case 1:
            message.classList.add('alert', 'alert-warning', 'text-center');
            message.textContent = 'Tarif orange'
            break;
        case 2:
            message.classList.add('alert', 'alert-danger', 'text-center');
            message.textContent = 'Tarif rouge'
            break;
    
        default:
            message.classList.add('alert', 'alert-dark', 'text-center');
            message.textContent = 'Vous êtes refusée'
            break;
    }
}
form.addEventListener('submit',assurance);