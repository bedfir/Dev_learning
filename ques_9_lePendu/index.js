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
    // console.log(wordMapping);
    //generate choices
    choices = generateChoices();
    // console.log(choices);
    //    - Choices mapping
    choicesMapping = getChoicesMapping(choices);
    // console.log(choicesMapping);
    //display word
    displayWord(wordMapping);
    //display choices
    displayChoices(choicesMapping)
    //display score
    // listen events
    //      - mouse events 
    //      - keyboard events
    // check letter
    // - If not in word: add score
    // - If in word: display letter
    // - endGame
    //      - if score == max: loseGame
    //      - if letter are visible : winGame

};


const displayChoices = (choicesMapping) => {
    const choicesHtml = choicesMapping.map((letterMapping) => {
        if (letterMapping.isChosen === false) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li class="disabled">${letterMapping.letter}</li>`
        }
    });
    els.choices.querySelector('ul').innerHTML = choicesHtml.join('');
};

const displayWord = (wordMapping) => {
    const wordHtml = wordMapping.map((letterMapping) => {
        if (letterMapping.isVisible === true) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li>_</li>`;
        }
    });

    els.answer.querySelector('ul').innerHTML = wordHtml.join('');
};

const generateChoices = () => {
    const choices = [];
    for(let i = 65; i <= 90; i++) {
        choices.push(String.fromCharCode(i));
    }
    return choices;
};

const getChoicesMapping = (choices) => {
    const choicesMapping = choices.map((letter) => {
        return {
            letter,
            isChosen: false
        };
    });
    return choicesMapping;
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getWordMapping = (word) => {
    const wordArr = word.split('');
    const wordMapping = wordArr.map((letter) => {
        return {
            letter,
            isVisible: false
        };
    });
    return wordMapping;
};

const pickWord = () => {
    let getRandomWord = getRandomInt(0, words.length - 1);
    return words[getRandomWord];
};

window.addEventListener('load', init);