function DnaTranscriber(){

    this.toRna = function(dna){
        var dnaMap = {
          'A' : 'U',
          'G' : 'C',
          'C' : 'G',
          'T' : 'A'
        };

        var result = [];

        for(var i = 0; i < dna.length; i++){
           result.push(dnaMap[dna[i]]);
        }

        return result.join("");
    };
}

module.exports = DnaTranscriber;
