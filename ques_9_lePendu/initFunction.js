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

const displayScore = () => {
    els.score.innerHTML = `${scoreCount} / ${scoreMax}`
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
    const wordMapping = wordArr.map((letter, index) => {
        let isVisible = false;
        if (index === 0 || index === wordArr.length - 1) {
            isVisible = true;
        }
        return {
            letter,
            isVisible
        };
    });
    return wordMapping;
};

const pickWord = () => {
    let getRandomWord = getRandomInt(0, words.length - 1);
    return words[getRandomWord];
};
