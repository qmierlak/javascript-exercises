const convertToFahrenheit = function(temp) {
  // from celsius
  return Math.round((temp * 9/5 + 32)*10)/10;
};

const convertToCelsius = function(temp) {

  // from farehnheit
  return Math.round(((temp-32)*5/9)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
