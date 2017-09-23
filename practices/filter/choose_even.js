'use strict';

function choose_even(collection) {
  return collection.filter((x)=>{
      return x % 2 === 0;
  }) ;
}

module.exports = choose_even;
// var collection = [0, 1, 2, 3, 4, 6];
// console.log(collection.filter((x)=>{
  
//     return x % 2 === 0;
  
// })) ;
