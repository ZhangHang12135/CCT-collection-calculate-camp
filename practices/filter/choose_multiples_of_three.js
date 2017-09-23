'use strict';

function choose_multiples_of_three(collection) {
  let result = [] ;
  //在这里写入代码
  for(let value of collection){
      if(value % 3 === 0){
        result.push(value) ;
      }
  }
  return result ;
}

module.exports = choose_multiples_of_three;
