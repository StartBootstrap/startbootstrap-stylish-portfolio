
var source = "cat can case";
QUnit.test( "Test Word List", function( assert ) {
    var wordlist = new WordList(source);
    assert.ok(wordlist);
    assert.equal(3,wordlist.size())
    assert.ok(wordlist.get(0))
    assert.ok(wordlist.get(0).spelledRight( "Cat" ));
    wordlist.sort()
    assert.ok(wordlist.get(0).spelledRight( "Can" ));
    wordlist.get(0).say();
});
QUnit.test( "Test Word", function( assert ) {
    var word = new Word("potatoe");
    assert.ok(word);
    assert.ok(!word.spelledRight(""));
    assert.ok(word.spelledRight("Potatoe"));
});
QUnit.test( "Test Translation", function( assert ) {
    var word = new Word("potatoe");

    assert.ok(word.translation.spelledRight("word"));
});
