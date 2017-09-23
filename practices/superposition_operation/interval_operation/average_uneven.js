'use strict';

function average_uneven(collection) {
  let arr =  collection.filter((value) => {
    return value % 2 != 0 ;
  }) ;
  let L = arr.length ;
  return arr.reduce((average,value) =>{
    return average +value/L ;
  },0) ;
}
module.exports = average_uneven;
