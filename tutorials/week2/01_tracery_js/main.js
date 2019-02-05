$(document).ready(function() {

	var jsonObj = {
		"origin": [
			"#NP# #VP#",
			"#IN# #NP# #VP#"
		],
		"NP": [
			"#Det# #N#",
			"#Det# #Adj# #N#",
			"#Det# #N# #PP#",
			"#N#"
		],
		"PP": [
			"#Prep# #NP#"
		],
		"Prep": [
			"in",
			"on",
			"over",
			"against",
			"with"
		],
		"VP": [
			"#Vtrans# #NP#",
			"#Vintr#",
			"hasOwnProperty",
			"isFinite",
			"isNaN",
			"isPrototypeOf #NP#"
		],
		"Det": [
			"this"
		],
		"N": ["Array","Date", "Math", "NaN", "Number", "Object", "String", "char","Infinity","function", "length", "name", "prototype", "class", "switch", "default",
	        "boolean", "byte", "case", "const", "debugger", "int", "interface", "package", "return", "var", "void", "argument"],
	"Vintr": ["continue", "float", "vocalize", "return"],
		"Adj": ["protected", "synchronized", "double","default", "undefined", "true","false", "static", "super", "public", "native", "new", "abstract",
	          "final", "long", "null", "private", "short", "transient","void","volatile"],
		"Vtrans": ["catch", "do", "delete", "break", "continue", "extend", "implement", "let","throw","try","yield","eval",
	             "export", "import", "return","goto","void"],
	  "IN":["if", "for", "while", "with"],
	  "RB":["finally","else"]
	};

	var grammar = tracery.createGrammar(jsonObj);
	var text = grammar.flatten('#origin#');
	$('#content').html(text);

  function loadJsonFromFile() {
		// You can load directly from local files in firefox but not in Chrome
		// To load from local files in chrome, check https://www.maketecheasier.com/setup-local-web-server-all-platforms/
		$.getJSON("https://raw.githubusercontent.com/cqx931/Coding4Language/master/tutorials/week2/01_tracery_js/grammar_tracery.json", function(json) {
	     console.log(json)
	  });
  };

	loadJsonFromFile();

});
