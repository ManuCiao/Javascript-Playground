var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function toRNA(dna) {
    var rnaString = [];
        for (var i=0; i < dna.length; i++) {
        switch(dna[i]) {
            case 'G':
                rnaString.push('C');
                continue;
            case 'C':
                rnaString.push('G');
                continue;
            case 'T':
                rnaString.push('A');
                continue;
            case 'A':
                rnaString.push('U');
        }
    }
    return rnaString.join('');
};

module.exports = DnaTranscriber;
