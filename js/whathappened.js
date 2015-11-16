/**
 * Created by i68066 on 11/16/15.
 */
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
};
var story = $.urlParam('story');
story = story.replace(/\+/g, " ").replace(/%0D%0/g, " ").replace(/%2C/g, ",").replace(/%3F/g, "?").replace(/%27/g, "'").replace(/%E2%80%94/g, "—");
console.log(story);