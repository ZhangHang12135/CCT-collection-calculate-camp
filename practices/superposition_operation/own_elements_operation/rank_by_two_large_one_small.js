'use strict';
var rank_desc = require('../../../practices/map/rank_desc.js');//从小到大
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let grouparr = groupthree(rank_desc(collection));
  return grouparr.reduce((previousValue,currentValue) => {
    return previousValue.concat(twoSmallOne(currentValue)) ;
  },[]) ;
}
module.exports = rank_by_two_large_one_small;

//换位置
function twoSmallOne(array){//数组长度固定为3
  if(array.length !== 3){
    return array ;
  }
  array[3] =array[0] ;
  array.shift() ;
  return array ;
}
//分成三个一组
function groupthree(array){
  let result = [] ;
  let L = array.length ;
  for(let i = 0;i<L;i=i+3){
    result.push(array.slice(i,i+3));
  }
  return result ;
}
// var collection = [2, 8, 1, 9, 6, 4, 3, 10];
// let b = groupthree(rank_desc(collection));
// let c = b.reduce((a,b)=>{
//   return a.concat(twoSmallOne(b));
// },[]) ;

// for(let i = 0,L=b.length;i<L;i++){
//   c.push(twoSmallOne(b[i])) ;
//   console.log('---------')
// }
// console.log(c);