const list_3 = document.querySelector('.extractWord ul');

list_3.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
list_3.style.backgroundColor = 'skyblue'


for (let i = 0; i < stations.length; i++) {
    let input = stations[i];
    // write your code just below here
    //extract the three lettre station
    let stationCode = input.slice(0,3);
    //find the position index of semicolon
    let indexsemicolon = input.indexOf(';');
    //extract the human readable station
    let humanReadableStation = input.slice(indexsemicolon + 1);
    
    let nameStation = stationCode + ': ' + humanReadableStation;


    let result = nameStation;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list_3.appendChild(listItem);
}