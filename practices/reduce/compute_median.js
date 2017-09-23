'use strict';

function compute_median(collection) {
  //在这里写入代码
  let L = collection.length;
  if(L % 2 === 0){
    return (parseInt(collection[L/2])+parseInt(collection[L/2-1]))/2;
  }else{
    return collection[parseInt(L/2)] ;
  }
}

module.exports = compute_median;


