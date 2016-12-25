var DnaTranscriber = function(){
  this.code = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
  };
};

DnaTranscriber.prototype.toRna = function (key) {
  return this.code[key];
};

module.exports = DnaTranscriber;
