'use strict';
var double_to_one = require("../../practices/flaten/double_dimensional_array_to_one_1.js");
var get_union = require('../../practices/collectionOperator/get_union.js');
function double_to_one_2(collection) {
  return get_union.arrRemoveRepeat(double_to_one(collection));
  
  //在这里写入代码
}

module.exports = double_to_one_2;