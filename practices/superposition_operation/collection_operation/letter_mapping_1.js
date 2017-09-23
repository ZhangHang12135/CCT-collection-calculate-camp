'use strict';
var get_letter_interval = require('../../../practices/collectionOperator/get_letter_interval.js');
var collect_all_even = require('../../../practices/collectionOperator/collect_all_even.js');
function even_to_letter(collection) {
  let arr = [] ;
  for(let value of collect_all_even(collection)){
    arr.push(get_letter_interval.tenTurn26char(value)) ;
  }
   return arr ;
}

module.exports = even_to_letter;

// get_letter_interval.tenTurn26char(1);
// console.log(get_letter_interval.tenTurn26char(1));