$(document).ready(function () {
  var grammar = new RiGrammar();


  grammar.loadFrom('grammar_rita.json', function(){
    console.log(grammar.ready());
    var result = grammar.expand();
    $('#content').html(result);
  });

  // load grammar from a string / a json object / YAML
  var grammar2 = new RiGrammar();
  grammar2.load('{"<start>": ["121", "221"],"1": "++__++", "2": "__+__", "+": "**","_": "##"}');
  var result = grammar2.expand();
  console.log(result)
  grammar2.print()

});
