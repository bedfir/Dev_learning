//selectionner l'element Html
const list_2 = document.querySelector('.replaceWord ul');
//Crèer une list
list_2.innerHTML = '';
//Tableaux des villes
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
//Background Color
list_2.style.backgroundColor = 'tomato';

//Boucle for pour afficher tout les villes
for (let i = 0; i < cities.length; i++) {
    //exctraire les villes
    let input = cities[i];
    //convertir les phrases en miniscule
    let lower = input.toLowerCase();
    //je saisi la premier lettre
    let firstLetter = lower.slice(0,1);
    //changer la lettre en majuscule
    let capitalized  = lower.replace(firstLetter, firstLetter.toLocaleUpperCase());
    //remplacer les lettre et le stocker
    let result = capitalized;



    let listItem = document.createElement('li');
    listItem.textContent = result;
    list_2.appendChild(listItem);
}