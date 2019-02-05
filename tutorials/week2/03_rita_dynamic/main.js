$(document).ready(function () {

  // Usecases: User generated content, games, generative grammar rules...

  var grammar = new RiGrammar();
  grammar.addRule("<start>", "the <action> of the <pet> | <person>");
  grammar.addRule("<pet>", "dog | cat | hamster");
  grammar.addRule("<person>", "lawyer | programmer | boss");
  grammar.addRule("<action>", "cries | screams | falls");
  console.log(grammar.getGrammar());

  console.log(grammar.hasRule("<start>"));
  grammar.removeRule("<start>");
  console.log(grammar.hasRule("<start>"));

  var result = grammar.expandFrom("<pet>");
  console.log(result);

  grammar.reset();
  console.log(grammar);
  
});
