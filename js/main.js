$(document).ready(function (){
    $('.wrong-msg, .correct-msg, .end-button').hide();
    var $wordArr = ['blizzard', 'crypt', 'bagpipes', 'fjord', 'beekeeper', 'waltz', 'xylophone', 'quorum', 'puppy', 'zombie', 'yipee', 'sphinx', 'lucky', 'kayak', 'peekaboo', 'rickshaw', 'zodiac', 'haiku', 'galaxy', 'ivory', 'abyss', 'phlegm', 'pneumonia', 'injury'];
 //   console.log($wordArr.length);

//generate a random word from the array (use array.length to allow more words to be added later)
    var $wordSelector = $wordArr[Math.floor(Math.random()*$wordArr.length)];
    console.log($wordSelector);

//print lines on the screen for each letter
    var $screenWord = $wordSelector.replace(/[a-z+]/g, ' _  .' ).split('.');
//       console.log($screenWord);
    $('.word-to-guess').append($screenWord);
//    console.log($screenWord);

var $clickCount = 0;
var $turnCounter = 10;
var $correctGuesses = 0;
var $index;

//Lives left counter
$('.guesses-left').append($turnCounter + " lives left");

//FUNCTION: Guess
//Prompt a guess


    $('.guess-button').click(function (){

        
        var $guess = prompt('Guess a Letter');
        console.log($guess);

        if ($guess === null) {
            console.log('I\'m null');
            return $('.guesses-left').html("You didn't guess. <br>Try again").css('background-color', 'palevioletred');
        } else if ($guess.length > 1) {
            console.log('wrong length');
            return $('.guesses-left').html("Sorry! <br>You can only guess one letter at a time").css('background-color', 'palevioletred');
        } else {
            console.log('c')
            $guess.toLowerCase();
        }
        


//change clickcount
        $clickCount++;

        if ($clickCount > 1) {
                var $oldResult = $index;
            } 

//Check the word        
        var $searchable = $wordSelector.split('');
        //console.log($searchable);
       
        $index =[];
        
        var $changed = false;
         for (var i = 0; i < $searchable.length; i++) {
            if ($searchable[i]===$guess) {
                $index.push($guess  + " ");
                    $changed = true;
                    $correctGuesses++;
                    console.log($correctGuesses);
            } else {
                if ($clickCount === 1) {
                    $index.push($screenWord[i]);

                } else {
                    $index.push($oldResult[i]);
  
                }
            }    
         }
//         console.log($changed);

//Show a message

if ($turnCounter=== 1) {
   return endGame();

} else if ($correctGuesses === $wordSelector.length) {
       correctWord();
} else {

        if ($changed === true) {
            $('.correct-msg').show();
            $('.wrong-msg').hide();
        } else {
            $turnCounter--
            $('.wrong-msg').show();
            $('.correct-msg').hide();
            //change turnCounter
            livesLeft();
            
}

//        console.log($index);

//Change the words on the screen


        $('.guess-button').html('Guess Another Letter');
        return $('.word-to-guess').html($index);
}


    });
    
//FUNCTION end wrong
function endGame() {
    $('.guess-button, .wrong-msg, .guesses-left').hide();
    $('.end-button').show().append('Try again?');
    $('.word-to-guess').html($wordSelector).css('color', 'red');
    $('.end-wrong-text').html("Oh dear! You lost");
}

//FUNCTION guessed correct
function correctWord() {
    $('.guess-button, .wrong-msg, .correct-msg, .guesses-left').hide();
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
 
 
 
 
 
  /*              if ($turnCounter === 1) {
                $('.guesses-left').html($turnCounter + " life left");
                 } else {
                $('.guesses-left').append($turnCounter + " lives left");
                }*/
}


});