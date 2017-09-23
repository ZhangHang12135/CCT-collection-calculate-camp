'use strict';

function compute_average(collection) {
  //在这里写入代码
  let L = collection.length ;
  return collection.reduce(function(sum,value){
    return sum + value/L ;
  },0) ;
}

module.exports = compute_average;
// var collection = [1, 3, 5, 98, 67, 453];
// console.log(compute_average(collection));

