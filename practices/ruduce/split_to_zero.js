'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  //递归可以，while循环
  let arr = [] ;
  while(number > 0){
    arr.push(parseFloat(number));
    number = (number - interval).toFixed(1) ;
  }
  arr.push(parseFloat(number));
  return arr ; 
}

module.exports = spilt_to_zero;
// let number = 0.8 ;
// let interval = 0.2 ;
// let arr = [] ;
// do{
//   arr.push(number);
//   number = (number - interval).toFixed(1) ;
// }while(number > 0);
// arr.push(number);
// console.log(arr) ;