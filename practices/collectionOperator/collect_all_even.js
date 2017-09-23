'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let arr = [] ;
  for(let value of collection){
    if( value % 2 === 0){
        arr.push(value) ;
    }
  }
  return arr ;
}

module.exports = collect_all_even;
