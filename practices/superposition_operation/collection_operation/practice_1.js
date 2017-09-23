'use strict';

function hybrid_operation(collection) {
  return collection.map((value)=>{
    return value*3 + 2 ;
  }).reduce(function(sum,value){
    return sum + value ;
  },0) ; 
  //在这里写入代码
}

module.exports = hybrid_operation;

