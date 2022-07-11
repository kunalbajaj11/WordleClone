const buttonElements = document.querySelectorAll('button');
let row = 0;
let letter = 0;
const wordRowElements = document.querySelectorAll('.word-row');

const wordForTheDay = 'RYTHM';

buttonElements.forEach(ele => {
    ele.addEventListener('click', function() {
        keyPress(ele.innerText);
    });
})

function keyPress(key) {
    if (key.toLowerCase() === 'enter') {
        enterWord();
    } else if (key.toLowerCase() === 'del') {
        deleteLetter();
    } else {
        populateLetter(key);
    }
}

function populateLetter(key) {
    if(letter < 5) {
        wordRowElements[row].querySelectorAll('.word')[letter].innerText = key;
        letter += 1;
    }
}

function enterWord() {
    if(letter < 5) {
        alert('Not enough letters');
    } else {
        checkWord();
        row += 1;
        letter = 0;
    }
}

function deleteLetter() {
    debugger;
    wordRowElements[row].querySelectorAll('.word')[letter-1].innerText = '';
    letter -= 1;
}

function checkWord() {
    debugger;
    const letters = wordRowElements[row].querySelectorAll('.word');

    letters.forEach((ele, ind) => {
        const ifExistsWithIndex = wordForTheDay.toLowerCase().indexOf(ele.innerText.toLowerCase());

        if (ifExistsWithIndex === ind) {
            ele.classList.add('word-green');
        } else if (ifExistsWithIndex > 0) {
            ele.classList.add('word-yellow');
        } else {
            ele.classList.add('word-grey');
        }
    });
}