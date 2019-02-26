var words = ['assist', 'double', 'triple', 'single', 'homer-run', 'inning', 'pickoff', 'flyout', 'save', 'fastball', 'shutout', 'strikeout', 'shift', 'slider', 'balk', 'bunt', 'error', 'walk'];

var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];
var randWord = words[Math.floor(Math.random() * words.length)];
var lettersOfTheWord = randWord.split('');
var winCounter = 0;

function startGame() {
    for (var i = 0; i < randWord.length; i++) {
        underScores.push('_');
    }
    document.getElementById('underscoresP').textContent = underScores.join(" ");

    wrongLetter = [];
    guessesLeft = 10;

    document.getElementById('guessesLeft').textContent = guessesLeft;
}
function winLose() {
    for (var i = 0; i < underScores.length; i++) {
        if (underScores.indexOf('_') > -1) {
            console.log('keep guessing')
        } else {
            console.log('we have a winner')
        }

        if (winCounter === randWord.length) {
            alert('Winner');
            winCounter++;
            {
                if (guessesLeft === 0) {
                    alert('Loser');
                    winCounter--;
                }
            }
        }
    }
}


document.onkeyup = function (event) {
    keyPressed = event.key;

    if (randWord.indexOf(keyPressed) > -1) {
        for (var i = 0; i < randWord.length; i++) {
            if (randWord[i] === keyPressed) {
                underScores[i] = keyPressed;
                console.log('underscores array', underScores);
                console.log(document.getElementById('underscoresP'));
                document.getElementById('underscoresP').textContent = underScores;
                // couldnt figure the join to make the commas go away
                winLose();
            }
        }
    }
    else {
        wrongLetter.push(keyPressed);
        guessesLeft--;
        console.log('wrong letters array', wrongLetter);
        document.getElementById('wrongGuessP').textContent = wrongLetter;

        winLose();
    }
}

startGame();