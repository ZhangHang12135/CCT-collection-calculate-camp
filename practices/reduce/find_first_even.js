'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for(let value of collection){
    if(value % 2 === 0){
      return value ;
    }
  }
}

module.exports = find_first_even;

