

function WordList(source, delimeter) {
    this.delimeter = delimeter || " ";
    this.words = source.split(this.delimeter);;
    this.size = function(){
        return this.words.length;
    }
    this.get= function (i) {
        return new Word(this.words[i]);
    }
    this.sort = function(){
        this.words.sort()
    }

}

function Word(src, language) {
    this.src = src;
    this.voice = window.speechSynthesis.getVoices()[1];
    this.language = language || "en" ;
    this.translation = (this.language == 'en') ? new Word('word','fr') : null;
    this.say = function() {
        var msg = new SpeechSynthesisUtterance(this.src);
        msg.voice = this.voice;
        window.speechSynthesis.speak(msg);
    }
    this.spelledRight = function(word) {
        return word.toUpperCase() == src.toUpperCase();
    }

}
