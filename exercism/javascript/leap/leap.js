var Year = function() {};

Year.prototype.isLeap = function(year) {
  return !(year % 4) && (year % 100) || !(year % 400);
};

module.exports = Year;
