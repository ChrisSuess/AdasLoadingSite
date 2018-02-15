// -- UTILITY FUNCTIONS
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.trim == String.prototype.trim || function() {
	return this.replace(/^\s+|\s+$/g, '');
}

// pg = Poetry Generator
var pg = {

	// -- BEGIN CONFIG ------------------------------------------------------------
	numSentences: 10,
	numSentencePatterns: null,

	// hard-coded sentence patterns is the simpler way
	// TODO: make more flexible / less artificial
	sentencePatterns: [
		['article', 'adjective', 'noun', 'verb', 'adverb', 'preposition', 'article', 'noun'],
		['pronoun', 'adverb', 'verb', 'noun', 'preposition', 'article', 'noun']
	],

	languageParts: {
		'vowel': 'aeiou'.split(''),
		'article': {
			'beforeVowel': 'the|an'.split('|'),
			'beforeConsonant': 'the|a'.split('|')
		},
		'preposition': 'to|through|under|over|between|on|in|above|below|betwixt'.split('|'),
		'adjective': 'beautiful|tall|flowing|hot|cold|fragrant|misty|bare|coarse|blind|dim|dreary|elaborate|enchanting|gleaming|glistening|green|organic|tender|cloudless'.split('|'),
		'adverb': 'quickly|slowly|boldly|always|angrily|cheerfully|elegantly|frantically|innocently|nervously|powerfully|rarely|silently|wildly|warmly|solemly'.split('|'),
		'noun': 'hair|finger|sun|field|arm|sphere|rock|sand|grass|tree|flower|orb|sea|water|ocean|tide|sky|cloud|moon|star|cosmos|ant|otter|elephant'.split('|'),
		'pronoun': 'he|she|it|someone'.split('|'),
		'verb': 'kicks|moves|swings|runs|walks|flies|sprays|stings|drops|breaks|explodes|diminishes|sweetens|falls|rises|hears|floats'.split('|'),
		'stop': '.|?|!'.split('|'),
		'pause': ',|;|...| - |'.split('|')
	},
	// -- END CONFIG --------------------------------------------------------------

	init: function() {
		this.numSentencePatterns = this.sentencePatterns.length;
	},

	generateSentences: function(numSentences, markupBefore, markupAfter) {
		var numSentences = numSentences || this.numSentences;
		var markupBefore = markupBefore || '';
		var markupAfter = markupAfter || '';
		var sentences = [];

		while (numSentences--) {
			var sentence = '';
			var sentencePattern = this.sentencePatterns[ randomInt(0, this.numSentencePatterns - 1) ];
			
			// loop through sentence pattern array
			for (var i = 0, length = sentencePattern.length; i < length; i++) {
				var languagePartArray;
				var articleType;
				var nextWord = null;

				// if this word is an article, need to determine if next word starts with a vowel or consonant
				if (sentencePattern[i] === 'article') {
					// get next word
					var nextWordLanguagePartArray = this.languageParts[ sentencePattern[i + 1] ];
					var nextWord = nextWordLanguagePartArray[ randomInt(0, nextWordLanguagePartArray.length - 1) ];

					// set article type based on whether next word starts with vowel or consonant
					if (this.languageParts['vowel'].indexOf(nextWord[0]) !== -1) {
						articleType = 'beforeVowel';
					} else {
						articleType = 'beforeConsonant';
					}

					languagePartArray = this.languageParts[ sentencePattern[i] ][ articleType ];
				} else {
					languagePartArray = this.languageParts[ sentencePattern[i] ];
				}

				// add this word to sentence
				sentence += languagePartArray[ randomInt(0, languagePartArray.length - 1) ] + ' ';

				// if next word was gotten, also add next word to sentence and increment the i counter
				if (nextWord !== null) {
					sentence += nextWord + ' ';
					i++;
				}
			}

			sentences.push(markupBefore + sentence.trim() + markupAfter);
			// console.log(sentence);

		} // end while (numSentences--)

		return sentences;

	} // end generateSentences()
} // end poetryGenerator

// ----------------------------------------------------------------------------

$(document).ready(function() {
  
  // initialize poetry generator
  pg.init();
  
  $('.generate').on('click', function() {
    var sentences = pg.generateSentences( $('#num-sentences').val(),  ' \n' );
    //$('#poetry-content').html( sentences.join('') );
    document.getElementById("poem").value = sentences;
    document.getElementById("Shansh").innerHTML = sentences;
    var y = document.getElementById('poem').value.split(" ").sort(function(){return 0.5-Math.random()}).join(" ");
            document.getElementById('Pansh').innerHTML = y.replace(/\n/g, "<br>");
            document.getElementById('hidden').innerHTML = y;
    document.getElementById('Shansh').innerHTML = sentences.join(" ");
    document.getElementById("poem").style.display='none';
 })
 
})
