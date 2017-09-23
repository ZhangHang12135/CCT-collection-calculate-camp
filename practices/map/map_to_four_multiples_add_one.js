'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map(function(value){
    return value * 4 + 1 ;
  });
};

module.exports = map_to_four_multiples_add_one;
var collection = [1, 2, 3, 4, 5];
console.log(collection.map(function(value){
  return value * 4 + 1 ;
}))