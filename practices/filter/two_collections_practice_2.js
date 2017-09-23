'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let arr = [] ;
  for(let value1 of collection_a){
    for(let value2 of collection_b){
      if (value1 === value2) {
        arr.unshift(collection_a.indexOf(value1));
        // collection_a.splice(collection_a.indexOf(value1)+1,1) ;
      }
    }
  }
  for(let index of arr){
    collection_a.splice(index,1) ;
  }
  return collection_a ;
}

module.exports = choose_no_common_elements;
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = ["a", "d", "e", "f"];
let arr = [];
//返回一个新的数组，对原先的数组没有改变
for(let value1 of collection_a){
  var num = 1 ;//num计数
  for(let value2 of collection_b){
    if (value1 === value2) {
      num ++ ;
      // collection_a.splice(collection_a.indexOf(value1)+1,1) ;
    }
   }
    if(num === 1){
      arr.push(value1);
  }
}
console.log(arr);

