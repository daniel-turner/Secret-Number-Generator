'use strict';
module.exports = function() {

  var randomNumber = Math.random() * 1000000;

  var generateRandomNumber = function() {

    return randomNumber;
  };

  return generateRandomNumber;
};