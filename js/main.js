$(document).ready(function (){
    $('.wrong-msg, .correct-msg').hide();
    var $wordArr = ['blizzard', 'crypt', 'bagpipes', 'fjord', 'beekeeper', 'waltz', 'xylophone', 'quorum', 'puppy', 'zombie', 'yipee', 'sphinx', 'lucky', 'kayak', 'peekaboo', 'rickshaw', 'zodiac', 'haiku', 'galaxy', 'ivory', 'abyss', 'phlegm', 'pneumonia', 'injury'];
 //   console.log($wordArr.length);

//generate a random word from the array (use array.length to allow more words to be added later)
    var $wordSelector = $wordArr[Math.floor(Math.random()*$wordArr.length)];
    console.log($wordSelector);

//print lines on the screen for each letter
    var $screenWord = $wordSelector.replace(/[a-z+]/g, '__ .' ).split('.');
       console.log($screenWord);
    $('.word-to-guess').append($screenWord);
    console.log($screenWord);

var $index;
//prompt a guess function
var $clickCount = 0;
    $('.guess-button').click(function (){
        $clickCount++;
        console.log($clickCount);
            if ($clickCount > 1) {
                var $oldResult = $index;
                console.log($oldResult);
            } 
        
        var $guess = prompt('Guess a Letter').toLowerCase();
        
        //console.log($guess);
        
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
         console.log($changed);
        if ($changed === true) {
            $('.correct-msg').show();
            $('.wrong-msg').hide();
        } else {
            $('.wrong-msg').show();
            $('.correct-msg').hide();
        }

        console.log($index);
        $('.guess-button').html('Guess Another Letter');
        return $('.word-to-guess').html($index);
        
    });
    



});