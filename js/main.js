$(document).ready(function (){
    $('.wrong-msg, .correct-msg, .end-button').hide();
    var $wordArr = ['blizzard', 'crypt', 'bagpipes', 'fjord', 'beekeeper', 'waltz', 'xylophone', 'quorum', 'puppy', 'zombie', 'yipee', 'sphinx', 'lucky', 'kayak', 'peekaboo', 'rickshaw', 'zodiac', 'haiku', 'galaxy', 'ivory', 'abyss', 'phlegm', 'pneumonia', 'injury', 'jockey', 'avenue', 'ivy', 'jigsaw', 'buffalo', 'cobweb', 'awkward', 
    'jelly', 'gossip', 'microwave', 'quartz', 'twelfth', 'unknown', 'zigzagging', 'subway', 'rhythm'];


//generate a random word from the array (use array.length to allow more words to be added later)
    var $wordSelector = $wordArr[Math.floor(Math.random()*$wordArr.length)];
 //   console.log($wordSelector);

//print lines on the screen for each letter
    var $screenWord = $wordSelector.replace(/[a-z+]/g, ' _  .' ).split('.');

    $('.word-to-guess').append($screenWord);

//Global(ish) variables

    var $clickCount = 0;
    var $turnCounter = 10;
    var $correctGuesses = 0;
    var $index;
    $guessed = [];
    $guessedScreen = [];
    var $guess;
    var alreadyGuessed;

//Lives left counter
    $('.guesses-left').append($turnCounter + " lives left");

//FUNCTION: Guess
//Prompt a guess
    $('.guess-button').click(function (){
        
        $guess = prompt('Guess a Letter');

//Error messages for incorrect input
        if ($guess === null) {
            return $('.guesses-left').html("You didn't guess. <br>Try again").css('background-color', 'palevioletred');
        } else if ($guess.length > 1) {
            return $('.guesses-left').html("Sorry! <br>You can only guess one letter at a time").css('background-color', 'palevioletred');
        } else {
            $guess.toLowerCase();
            checkGuess();
        }

//Return if checkGuess = true for a repeated word
        if (alreadyGuessed === true) {
            $('.wrong-msg, .correct-msg').hide();
            return $('.guesses-left').html("You have already guessed " + $guess + ". <br>Try Again!").css('background-color', 'palevioletred');
        }             
//change clickcount
        $clickCount++;

//save the previous index with previously guessed letters
        if ($clickCount > 1) {
                var $oldResult = $index;
            } 

//Check the word for the guessed letter        
       var $searchable = $wordSelector.split('');
       $index =[];

       var $changed = false;

         for (var i = 0; i < $searchable.length; i++) {
            if ($searchable[i]===$guess) {
                $index.push($guess  + " ");
                    $changed = true;
                    $correctGuesses++;
            } else {

                    if ($clickCount === 1) {
                        $index.push($screenWord[i]);
                        
                    } else {
                        $index.push($oldResult[i]);
                    }
            }    
         }


//Show a correct/incorrect message

        if ($turnCounter=== 1 && $changed !== true) {
            return endGame();

        } else if ($correctGuesses === $wordSelector.length) {
            correctWord();
        } else {
            if ($changed === true) {
                $guessed.push($guess);
                $('.correct-msg').show();
                $('.wrong-msg').hide();
            } else {
                $guessed.push($guess);
                $guessedScreen.push($guess + " ");
                $turnCounter--
                $('.wrong-msg').show();
                $('.correct-msg').hide();
                guessedLetters();
            //change turnCounter
                livesLeft();
            }

//Change the words on the screen
        $('.guess-button').html('Guess Another Letter');
        return $('.word-to-guess').html($index);
        }
    
    });

//FUNCTION check guess has not been previously guessed
    function checkGuess () {
         var isItRepeated = $guessed.includes($guess);
        if (isItRepeated === true) {
            alreadyGuessed = true;
        } else {
            alreadyGuessed = false;
        }
    }

//FUNCTION display guessed letters on the screen
    function guessedLetters () {
        $('.already-guessed').html("You have already guessed:");
        $('.already-guessed-letters').html($guessedScreen);
    }


//FUNCTION end wrong
    function endGame() {
        $('.guess-button, .wrong-msg, .correct-msg, .guesses-left, .already-guessed, .already-guessed-letters').hide();
        $('.end-button').show().append('Try again?');
        $('.word-to-guess').html($wordSelector).css('color', 'red');
        $('.end-wrong-text').html("You lost<br> Better luck next time");
    }

//FUNCTION guessed correct
    function correctWord() {
        $('.guess-button, .wrong-msg, .correct-msg, .guesses-left, .already-guessed, .already-guessed-letters').hide();
        $('.end-button').show().append('Try again?');
        $('.word-to-guess').html($wordSelector).css('color', 'green');
        $('.guessed-correct-text').html('Congratulations! You guessed correctly');
    }

//FUNCTION lives left colour
    function livesLeft() {
        switch ($turnCounter) {
            case 1:
                $('.guesses-left').html($turnCounter + " life left").css('background-color', 'darkred').css('color', 'white');
                break;
            case 2:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'firebrick').css('color', 'white');
                break;
            case 3:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'red');
                break;
            case 4:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'lightsalmon');
                break;
            case 5:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'orange');
                break;
            case 6:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'gold');
                break;
            case 7:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'yellow');
                break;
            case 8:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'greenyellow');
                break;
            case 9:
                $('.guesses-left').html($turnCounter + " lives left").css('background-color', 'lawngreen');
                break;
        }
    }


});