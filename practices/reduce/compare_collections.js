'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.toString() === collection_b.toString() ;
}
module.exports = compare_collections;
//var collection_a = [1,11,27,20,4,9,15];
//var collection_b = [,11,27,20,4,9,15];
// let a = collection_a.toString() ;=>1,11,27,20,4,9,15 
// console.log(typeof(a) );=>string
// console.log(collection_a.toString()===collection_b.toString()) ;
