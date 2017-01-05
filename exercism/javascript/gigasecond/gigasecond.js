var Gigasecond = function(bday) {
  this.bday = bday;
  this.gigasec = Math.pow(10,12);
};

Gigasecond.prototype.date = function () {
  var bdate = this.bday.getTime();
  return new Date(bdate + this.gigasec);
};

module.exports = Gigasecond;
