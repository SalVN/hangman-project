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

var $index;
//FUNCTION: Guess
//Prompt a guess
var $clickCount = 0;
var $turnCounter = 2;
    $('.guess-button').click(function (){
        $clickCount++;

            if ($clickCount > 1) {
                var $oldResult = $index;
            } 
        
        var $guess = prompt('Guess a Letter').toLowerCase();

//Check the word        
        var $searchable = $wordSelector.split('');
        //console.log($searchable);
       
        $index =[];
        
        var $changed = false;
         for (var i = 0; i < $searchable.length; i++) {
            if ($searchable[i]===$guess) {
                $index.push($guess  + " ");
                    $changed = true;
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

       
} else {

        if ($changed === true) {
            $('.correct-msg').show();
            $('.wrong-msg').hide();
        } else {
            $turnCounter--
            console.log($turnCounter);
            $('.wrong-msg').show();
            $('.correct-msg').hide();
        }

//        console.log($index);

//Change the words on the screen


        $('.guess-button').html('Guess Another Letter');
        return $('.word-to-guess').html($index);
}


    });
    
//FUNCTION end wrong
function endGame() {
    $('.guess-button, .wrong-msg').hide();
    $('.end-button').show().append('Try again?');
    $('.word-to-guess').html($wordSelector).css('color', 'red');
    $('.end-wrong-text').html("Oh dear! You lost");
}


});