'use strict';

function choose_common_elements(collection_a, collection_b) {
  let arr = [] ;
  for(let value1 of collection_a){
    for(let value2 of collection_b){
      if (value1 === value2) {
        arr.push(value1) ;
      }
    }
  }
  return arr ;
}

module.exports = choose_common_elements;
