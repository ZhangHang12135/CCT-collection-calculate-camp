'use strict';
function map_to_even(collection){
  return collection.map((value) => {
    return value * 2 ;
  });
}
module.exports = map_to_even;
var collection_a = [1, 2, 3, 4, 5];
console.log(collection_a.map((value) => {
  return value * 2 ;
})) ;