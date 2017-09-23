'use strict';
var get_letter_interval = require('../../practices/collectionOperator/get_letter_interval.js');
var number_map_to_word_over_26 = function(collection){
  return collection.map(get_letter_interval.tenTurn26char);
};

module.exports = number_map_to_word_over_26;
var collection = [1, 13, 27, 30, 25, 27];
console.log(collection.map(get_letter_interval.tenTurn26char)) ;