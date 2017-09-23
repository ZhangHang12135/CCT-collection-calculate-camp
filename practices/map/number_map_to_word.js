'use strict';
var get_letter_interval = require('../../practices/collectionOperator/get_letter_interval.js');
var number_map_to_word = function(collection){
  return collection.map(get_letter_interval.tenTurn26char);
};

module.exports = number_map_to_word;
// var collection = [1, 2, 3, 4, 5];
// console.log(collection.map(get_letter_interval.tenTurn26char));