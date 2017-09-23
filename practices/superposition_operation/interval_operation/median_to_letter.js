'use strict';
var get_letter_interval = require('../../../practices/collectionOperator/get_letter_interval.js');
var compute_median = require('../../../practices/reduce/compute_median.js');
function median_to_letter(collection) {
  return get_letter_interval.tenTurn26char(Math.round(compute_median(collection))) ;
}

module.exports = median_to_letter;
