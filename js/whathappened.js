/**
 * Created by i68066 on 11/16/15.
 */
var sentence = [];
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
	$("#sortable").sortable().disableSelection();

	var story = $.urlParam('story');
	story = decodeURI(story);
	story = story.replace(/\+/g, " ").replace(/%0D%0A/g, " ").replace(/%2C/g, ",").replace(/%3F/g, "?").replace(/%27/g, "'").replace(/%E2%80%94/g, "—");
	sentence = story.split(".").map(function (a) {
		return a.trim()
	});

	sentence.pop();

	for (var i = 0; i < sentence.length; i++) {
		$('#sortable').append('<div class="ui-state-default"><i class="ui-icon ui-icon-arrowthick-2-n-s"></i>' + sentence[i] + '</div>')
	}

	console.log(sentence);
	console.log(story);

});

//TODO see if we can stay on the same page but take out the "story" parameters
//TODO actually randomize the sentences by popping and unshifting everyother sentence
//TODO make a check for the correct sequence