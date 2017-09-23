'use strict';
var rank_asc = function(collection){
  for(let index_i = 0,L = collection.length;index_i < L;index_i ++ ){
    for(let index_j = index_i;index_j < L ;index_j ++){
      if(collection[index_i] < collection[index_j] ){
        let item = collection[index_i] ;
        collection[index_i] = collection[index_j] ;
        collection[index_j] = item ;
      }
    }
  }
  return collection ;
};

module.exports = rank_asc;
// var collection = [3, 2, 4, 5, 6];
// for(let index_i = 0,L = collection.length;index_i < L;index_i ++ ){
//   for(let index_j = index_i;index_j < L ;index_j ++){
//     if(collection[index_i] < collection[index_j] ){
//       let item = collection[index_i] ;
//       collection[index_i] = collection[index_j] ;
//       collection[index_j] = item ;
//     }
//   }
// }
// console.log(collection) ;