'use strict';

function double_to_one(collection) {
  let arr = [] ;
  for(let array of collection){
    arr = arr.concat(array);
  }
  return arr ;
}

module.exports = double_to_one;