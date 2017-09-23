'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for(let value of collection_b){
    collection_a.push(value)
  }
  return arrRemoveRepeat(collection_a) ;
}

module.exports = {
  get_union,
  arrRemoveRepeat
}
 //感觉过于装B
 //数组去重，删掉数组前面重复的
// function arrRemoveRepeat(array){
//   let r = [];
//   for(let i = 0, l = array.length; i < l; i++) {
//     for(let j = i + 1; j < l; j++)
//       if (array[i] === array[j]) j = ++i;
//     r.push(array[i]);
//   }
//   return r;
// }
//数组去重
function arrRemoveRepeat(array){//感觉这个会很慢
  let r = [];
  for(let i = 0, l = array.length; i < l; i++) {
      if (r.indexOf(array[i]) === -1 ){
        r.push(array[i]);
      } 
    
  }
  return r;
}
// var collection_a = [10, 27, 28, 19, 5];
// var collection_b = [5, 78, 28, 19, 23];
// for(let value of collection_b){
//   collection_a.push(value) ;
// }
// console.log(collection_a);
// console.log(arrRemoveRepeat(collection_a)) ;