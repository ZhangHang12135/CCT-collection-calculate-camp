'use strict';

function collect_max_number(collection) {
  //选择比较
  let max ;
  for(let value1 of collection){
    max = value1 ;
    for(let value2 of collection){
      if(value2 > max){
        max = value2;
      }
    }
  }
  return max ;
}

module.exports = collect_max_number;
