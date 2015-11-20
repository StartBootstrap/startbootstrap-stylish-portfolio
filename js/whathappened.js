/**
 * Created by i68066 on 11/16/15.
 */
var sentence = [],
	story = '',
	answer;

//this is storing the short story in the url since we don't have a nice database to handle them
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
		stop: function () {
			correctSequence()
		}
	}).disableSelection();

	story = $.urlParam('story');
	story = decodeURI(story);
	story = story.replace(/\+/g, " ").replace(/%0D%0A/g, " ").replace(/%2C/g, ",").replace(/%3F/g, "?").replace(/%27/g, "'").replace(/%E2%80%94/g, "—").replace(/%3A/g, ":");
	sentence = story.split(".").map(function (a) {
		return a.concat(".").trim()
	});

	// took this from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

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
	shortenUrl();

	history.pushState({}, '', 'whathappenednext.html');

});

// I wanted a short url for the teacher to send to the students
// http://stackoverflow.com/questions/12696704/using-javascript-to-access-googles-url-shortener-apis-in-a-google-chrome-extens

function shortenUrl() {
	var longUrl = $(location).attr('href');
	return $.ajax({
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		url: 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=AIzaSyB2ZMusQbdGhrS_4qdyqXj-EF-5mtZT9WM',
		data: '{"longUrl": "' + longUrl + '"}',
		success: function(response) {
			$('#shortUrl').val(response.id);
		}
	});
}

function correctSequence() {
	var arr = [];
	$('#sortable > div').each(function () {
		arr.push($(this).text())
	});
	answer = arr.join('');
	answer = answer.replace(/\s/g, '');
	story = story.replace(/\s/g, '');
	story == answer ? alert('yay!') : '';
}
