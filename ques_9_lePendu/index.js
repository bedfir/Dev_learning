const els = {
    score: null,
    answer: null,
    choices: null
};

const words = [
    'recongelassent', 'anesthésieront', 'submergeassent', /* 'renvenimassiez', 'réassortissent', 'échantillonnez', 'temporisassiez', 'désaltérassent', 'squattériserai', 'dénonciatrices', 'reconnaîtrions', 'fainéanterions', 'ressouvinssent', 'réaménageasses', 'déchaperonnées', 'désapparierais', 'désemprisonnez', 'pétaraderaient', 'surexcitations', 'décapellerions', 'sclérosassions', 'symbolisations', 'fluidifiassiez', 'hématologistes', 'signifieraient', 'confusionnelle', 'écorniflerions', 'engrossassions', 'désambiguïsons', 'dévitrifieront', 'dépolarisaient', 'croustillèrent', 'dindonneraient', 'retranscrirais', 'dépassionnerez', 'proverbialisez', 'divisionnaires', 'dodécasyllabes', */
];

let choices = [];
let choicesMapping = [];
let word = '';
let wordMapping = [];
let scoreCount = 0;
let scoreMax = 8;


const init = () => {
    // Attach Element
    els.score = document.querySelector('#score');
    els.answer = document.querySelector('#answer');
    els.choices = document.querySelector('#choices');
    
    //pick word 
    word = pickWord(words);
    // console.log(word);
    //  - word mapping
    wordMapping = getWordMapping(word);
    console.log(wordMapping);
    //generate choices
    choices = generateChoices();
    // console.log(choices);
    //    - Choices mapping
    choicesMapping = getChoicesMapping(choices);
    // console.log(choicesMapping);
    //display word
    displayWord(wordMapping);
    //display choices
    displayChoices(choicesMapping);
    //display score
    displayScore();
    // listen events
    //      - mouse events 
    els.choices.addEventListener('click', ({ target }) => {
        // evt.target =>  { target }
        if (target.matches('li')) {
            checkLetter(target.innerHTML);
        }
    });
    //      - keyboard events
    document.addEventListener('keydown', ({ keyCode }) => {
        // evt.keyboardEvent evt.keyCode => { keyCode }
        const letter = String.fromCharCode(keyCode);
        if (keyCode >= 65 && keyCode <= 90) {
            checkLetter(letter);
        }
        
    });

};
    // check letter
    // - If not in word: add score
    // - If in word: display letter
    // - endGame
    //      - if score == max: loseGame
    //      - if letter are visible : winGame
const checkLetter = (letter) => {
    console.log(letter);
    let isLetterInWord = false;
    wordMapping.forEach(() => {
        if (letterMapping.letter === letter) {
            letterMapping.isVisible = true;
            isLetterInWord = true;
        }
    });
};

window.addEventListener('load', init);