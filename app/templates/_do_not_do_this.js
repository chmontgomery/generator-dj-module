module.exports = BogusModule;

function BogusModule () {
}

BogusModule.prototype.doesNothing = function (cb) {
    cb(null, "I did nothing");
};