//http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
function stringStartsWith (string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}
function TypingModel(source) {
    this.sourceDocument = source;
    this.theirDocument = "";

    //What they've typed in so far is exactly equal to the source document
    this.isAccurate = function() {
        return stringStartsWith(this.sourceDocument, this.theirDocument);
    }
    this.setTheirDocument = function(theirDocument) {
        this.theirDocument = theirDocument;
    }
    //Returns percentage of completion (0-100%)
    this.progress = function() {
        return (this.theirDocument.length / this.sourceDocument.length) * 100;
    }
}
var sourceDocument = "Now is the time for all good men to come to the aid of the party";
QUnit.test( "isAccurate Test", function( assert ) {
    var model = new TypingModel(sourceDocument);

    assert.ok( model.isAccurate(), "Passed!" );

    assert.equal(model.progress(), 0.0);

    model.setTheirDocument("N");
    assert.equal(model.theirDocument, "N");

    assert.ok(model.progress() > 0, "User has typed in one letter")

    assert.ok(model.isAccurate())
    model.setTheirDocument("Na");
    assert.ok(!model.isAccurate(), "The user mistyped a letter")

    model.setTheirDocument(sourceDocument);
    assert.equal(model.progress(), 100.0);
});
QUnit.test( "source Doc Test", function( assert ) {
    var model = new TypingModel(sourceDocument);
    assert.equal(model.sourceDocument, sourceDocument);
});
