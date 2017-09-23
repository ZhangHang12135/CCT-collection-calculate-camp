'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter((value)=>{
    return value % 2 != 0 ;
  }).map((value)=>{
    return value * 3 + 5 ;
  }).reduce(function(sum,value){
    return sum + value ;
  },0) ;
}

module.exports = hybrid_operation_to_uneven;
