'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let chararr = [] ;
  if(number_a < number_b){
    for(let num = number_a;num <= number_b ;num ++){
        chararr.push(tenTurn26char(num)) ;
    }
  }
  if(number_a > number_b){
    for(let num =number_a;num >= number_b;num --){
      chararr.push(tenTurn26char(num)) ;
    }
  }
  if(number_a === number_b){
    chararr.push(tenTurn26char(number_a)) ;
  }
  return chararr ;
}

module.exports = {
  get_letter_interval,
  numTurnchar,
  tenTurn26char
}
// for (var index = 97; index < 123; index++) {
//   console.log(String.fromCharCode(index)) ;
// }
//单个数字转字母（1->a,2->b...26->z）
function numTurnchar(num){
  num = num % 26 ;
  if(num === 0){
    return String.fromCharCode(122) ;
  }
  return String.fromCharCode(num+96) ;
}
function tenTurn26char(num){
  let numArr = [] ;//用数组存放数字的每一位
  let str = '' ;//存放输出的字母
  //变成26进制存在数组中
  if(num <= 26){
    return numTurnchar(num);
  }
  while (num > 26) {
    numArr.unshift(num % 26) ;
    num = parseInt(num / 26) ;
    if(num < 26){
      numArr.unshift(num) ;
    }
  }
  for(let value of numArr){//将26进制数字变成字母
    str += numTurnchar(value) ;
  }
  return str ;
}

