'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let min ;
  for(let value1 of collection){
    min = value1 ;
    for(let value2 of collection){
      if(value2 < min){
        min = value2;
      }
    }
  }
  return min ;
}

module.exports = collect_min_number;

