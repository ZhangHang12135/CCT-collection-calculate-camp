'use strict';
var get_letter_interval = require('../../practices/collectionOperator/get_letter_interval.js');
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let chararr = [] ;
  if(number_a < number_b){
    for(let num = number_a;num <= number_b ;num ++){
        chararr.push(get_letter_interval.tenTurn26char(num) );
    }
  }
  if(number_a > number_b){
    for(let num =number_a;num >= number_b;num --){
      chararr.push(get_letter_interval.tenTurn26char(num)) ;
    }
  }
  if(number_a === number_b){
    chararr.push(get_letter_interval.tenTurn26char(num)) ;
  }
  return chararr ;
}
module.exports = get_letter_interval_2;



