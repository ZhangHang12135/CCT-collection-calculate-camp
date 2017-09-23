'use strict';

function grouping_count(collection) {
  return ArrToObj(collection);
}

module.exports = grouping_count;
function ArrToObj(array) {
  let obj = {} ;
  for(let value1 of array){
    obj[`${value1}`] = 1 ;
    for(let value2 of array){
      if(value1 === value2){
        obj[`${value1}`] ++;
      }
    }
    if(obj[`${value1}`] > 1){
      obj[`${value1}`] --;
    }
  }
  return obj ;
}
function AAAA(array){
  let obj = {};
  for(let value of array){
    if(!obj[`${value}`]){
      obj[`${value}`] = 1 ;
    }else{
      obj[`${value}`] ++ ;
    }
  }
  return obj ;
}
function BBBB(array) {
  let objArr = [] ;
  for(let value1 of array){
    if(!objArr[value1]){
       objArr[value1] = {key : value1,value : 1} ;
    }else{
      objArr[value1].value ++ ;
    }
  }
  return objArr ;
}
let arr = [1,1,1,1,2,3,4,5,6,3,2,1,2,3,2,] ;
console.log(BBBB(arr));
//console.log(AAAA(arr));
//  let obj1 = {
//   name : "zh" ,
//   "name1" : "dyc" 
// } ;
// console.log(obj1.name);
// console.log(obj1.name1);
// console.log(obj1["name1"] );