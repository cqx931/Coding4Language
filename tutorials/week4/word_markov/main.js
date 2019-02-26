$(document).ready(function () {
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  var markov = new RiMarkov(4);

  markov.loadFrom('../dataPolicy.txt', function(){
    if(markov.ready()) {
      console.log(markov.size());
      console.log(markov.getProbability("Facebook"));
      console.log(markov.getProbability("you"));
      console.log(markov.getProbabilities("you"));
      console.log(markov.getProbabilities(["you","are"]));
      var result = markov.generateSentences(7);
      $('#words').html(result);
    }
  });

});
