var log = true;

$(document).ready(function () {

  var paragraph = $('#text').text();

  var sentences = RiTa.splitSentences(paragraph);

  for (var i = 0; i < sentences.length; i++) {
    var words = RiTa.tokenize(sentences[i]);
    var posTags = RiTa.getPosTags(sentences[i]);
    // console.log(RiTa.getPosTagsInline(sentences[i]));

    for (var j = 0; j < posTags.length; j++) {
      var word = words[j];
      var posTag = posTags[j];

      if (word.indexOf("-") != -1) continue;

      if (posTag == "nn" || posTag == "nns") {

          function response(sourceWord, followers, apiFn) {
            // console.log(sourceWord, followers, apiFn)
            var newNN = RiTa.randomItem(followers);
            if (posTag == "nns") {
              newNN = RiTa.pluralize(newNN);
            }
            var text = $('#content').text();
            log &&  console.log("[NN] Replace " + sourceWord + " with " + newNN)
            text = text.replace(sourceWord, newNN);
            $('#content').text(text);
          }

          // find a similar word
          findWordsWithDatamuse("ml", word, 10, response);

      } else if (posTag == "jj") {
        var newJJ = RiTa.randomWord(posTag);
        log && console.log("[JJ] Replace " + words[j] + " with " + newJJ)
        words[j] = newJJ;
      }

    }
    var newSentence = RiTa.untokenize(words);
    $('#content').append(newSentence);
  }


  function findWordsWithDatamuse(apiFn, sourceWord, max, response) {
    $.ajax({
            dataType: "json",
            type : 'Get',
            url: 'https://api.datamuse.com/words?' + apiFn + '=' + sourceWord + '&max=' + max,
            success: function(data) {
                response(sourceWord, $.map( data, function(item) { return item["word"]; }), apiFn);
            },
        });
  }

});
