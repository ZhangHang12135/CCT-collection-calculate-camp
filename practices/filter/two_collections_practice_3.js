'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //返回一个新的数组，对参数不作改变
  let arr = [] ;
  for(let value1 of collection_a){
    for(let value2 of collection_b){
      if (value1 % value2 === 0) {
        arr.push(value1) ;
      }
    }
  }
  return arr ;
}

module.exports = choose_divisible_integer;
