'use strict';
var collect_all_even = require('../../practices/collectionOperator/collect_all_even.js');
function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let arr1 = [] ;
  //不相等
  if(number_a > number_b){
    for(let value = number_a ;value >= number_b ; value --){
      arr1.push(value) ;
    }
    return arr1
  }else if(number_a < number_b){
    for(let value = number_a ;value <= number_b ; value ++){
      arr1.push(value) ;
    }
    return arr1 ;
  }
  //相等情况
  if ((number_a === number_b)) {
      arr1.push(number_a) ;
      return arr1 ; 
  }
}

module.exports = get_integer_interval;

