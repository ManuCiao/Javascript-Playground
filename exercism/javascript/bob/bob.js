//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (!input.match(/\S/)) {
        return 'Fine. Be that way!';
    }
    if (!input.match(/[a-z]/)) {
        return 'Whoa, chill out!';
    }
    if (!input.match(/\w[^?]$/g)) {
        return 'Sure.';
    }
    return 'Whatever.';
};

module.exports = Bob;
