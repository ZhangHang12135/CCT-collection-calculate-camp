'use strict';
var compute_average = require('../../../practices/reduce/compute_average.js');
var get_letter_interval = require('../../../practices/collectionOperator/get_letter_interval.js');
function average_to_letter(collection) {
  return get_letter_interval.tenTurn26char(Math.round(compute_average(collection))) ;
}

module.exports = average_to_letter;

// let a = 2.4 ;
// let b = Math.round(a);
// console.log (b) ;