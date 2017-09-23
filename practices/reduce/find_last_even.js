'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for(let index_i = collection.length-1;index_i > -1;index_i --){
    if(collection[index_i] % 2 === 0){
      return collection[index_i] ;
    }
  }
}

module.exports = find_last_even;
