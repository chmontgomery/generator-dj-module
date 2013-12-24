var should = require('should'),
    DoNothing = require('../lib/do_not_do_this');

describe("Bogus test to fool Jenkins", function(){

    it("should do nothing successfully", function(done){
        var uselessGuy = new DoNothing();
        uselessGuy.doesNothing(function(err, data){
            data.should.eql('I did nothing');
            done();
        });
    });
});