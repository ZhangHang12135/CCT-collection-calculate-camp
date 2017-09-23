'use strict';

function amount_even(collection) {
  return collection.filter((value) => {
    return value % 2 === 0 ;
  }).reduce(function(sum,value){
    return sum + value ;
  },0) ;
}

module.exports = amount_even;
// var collection = [1,2,3,4,5,6,7,8,9,10];
// console.log(collection.reduce((sum,value)=>{
//   return sum + value ;
// })) ;
