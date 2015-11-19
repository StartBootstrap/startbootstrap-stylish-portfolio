/**
 * Created by i68066 on 11/16/15.
 */
var sentence = [],
	story = '',
	answer;
$.urlParam = function (name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results == null) {
		return null;
	}
	else {
		return results[1] || 0;
	}
};

$(function () {
	$("#sortable").sortable({
		stop: function(){correctSequence()}
	}).disableSelection();

	story = $.urlParam('story');
	story = decodeURI(story);
	story = story.replace(/\+/g, " ").replace(/%0D%0A/g, " ").replace(/%2C/g, ",").replace(/%3F/g, "?").replace(/%27/g, "'").replace(/%E2%80%94/g, "—").replace(/%3A/g, ":");
	sentence = story.split(".").map(function (a) {
		return a.concat(".").trim()
	});

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	sentence.pop();

	shuffle(sentence);

	for (var i = 0; i < sentence.length; i++) {
		$('#sortable').append('<div class="ui-state-default"><i class="ui-icon ui-icon-arrowthick-2-n-s"></i>' + sentence[i] + '</div>')
	}

	history.pushState({}, '', 'whathappenednext.html' );

});

function correctSequence (){
	var arr = [];
	$('#sortable > div').each(function () {
		arr.push($(this).text())
	});
	answer = arr.join('');
	answer = answer.replace(/\s/g, '');
	story = story.replace(/\s/g, '');
	story == answer ? alert('yay!') : '';
}


//TODO see if we can stay on the same page but take out the "story" parameters
//TODO actually randomize the sentences by popping and unshifting everyother sentence
//TODO make a check for the correct sequence