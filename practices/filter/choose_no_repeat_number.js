'use strict';
var get_union = require('../../practices/collectionOperator/get_union.js');
function choose_no_repeat_number(collection) {

  //在这里写入代码
   return get_union.arrRemoveRepeat(collection) ;
}

module.exports = choose_no_repeat_number;

