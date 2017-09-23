'use strict';
var collect_all_even = require('../../practices/collectionOperator/collect_all_even.js');
function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr1 = [] ;
  let arr2 = [] ;
  //不相等
  if(number_a > number_b){
    for(let value = number_a ;value >= number_b ; value --){
      arr1.push(value) ;
    }
    let arr3 = collect_all_even(arr1) ;
    return arr3 ;
  }else if(number_a < number_b){
    for(let value = number_a ;value <= number_b ; value ++){
      arr1.push(value) ;
    }
    let arr3 = collect_all_even(arr1) ;
    return arr3 ;
  }
  //相等情况
  if ((number_a === number_b)) {
    if (number_a % 2 === 0) {
      arr1.push(number_a) ;
      return arr1 ;
    }else{
      return arr1 ;
    } 
  }
}
module.exports = get_integer_interval_2;

