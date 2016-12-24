var Hamming = function() {
};

Hamming.prototype.compute = function(dna1, dna2) {
    var count = 0;

    if (dna1.length !== dna2.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    for (var i = 0; i < dna1.length; i++) {
        if (dna1.charAt(i) !== dna2.charAt(i)) {
            count++;
        }
    }
    return count;
};

module.exports = Hamming;
