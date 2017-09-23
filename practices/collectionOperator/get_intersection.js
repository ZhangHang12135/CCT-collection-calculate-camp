'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let arr = [] ;
  for(let value1 of collection_b){
    for(let value2 of collection_a){
      if (value1 === value2) {
        arr.push(value1) ;
      }
    }
  }
  return arr ;
}

module.exports = get_intersection;
