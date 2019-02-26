$(document).ready(function () {
  var markov = new RiMarkov(4);

  $.get("../dataPolicy.txt", function(data) {
     var tokens = data.split("");
     markov.loadTokens(tokens);
     if (markov.ready()) {
       var result = markov.generateTokens(300);
       $('#token').html(result);
     }
  });

});
