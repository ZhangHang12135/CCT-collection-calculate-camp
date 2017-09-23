'use strict';
var even_group_calculate_average = function(collection){
    let even_array = even_bit_array(collection) ;
    if(even_array.length === 0){
        return [0] ;
    }else{
       return  grouping_average(grouping(even_array)) ;
    }

};
module.exports = even_group_calculate_average;
// console.log([1,3,5].filter((value)=>{
//     return value % 2 === 0 ;
// }).length);
//分组函数
function grouping(array){
    let bit_obj = {} ;
    array.forEach(function(element) {
        if(!bit_obj[element.toString().length]){
        bit_obj[element.toString().length] ={};
        bit_obj[element.toString().length].value = [] ;
        bit_obj[element.toString().length].value.push(element) ;
    }else{
        bit_obj[element.toString().length].value.push(element) ;
    }
    }, this);
return bit_obj ;
}
//let a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14] ;
//let b = grouping(a) ;
//console.log(Object.keys(b));
//计算平均
function grouping_average(obj) {
    let average_arr = [];
    let key_arr = Object.keys(obj) ;
    for(let key of key_arr){
       average_arr.push(obj[key].value.reduce((previousValue,currentValue) => {
            return previousValue + currentValue ;
        })/ obj[key].value.length) ;
    }
    return average_arr ;
}
//console.log(grouping_average(b)) ;
function even_bit_array (collection){
     return collection.filter((value,index) => {//拿到偶数位的元素
                if(index % 2 !== 0){
                    return value ;
                 }
                 }).filter((value) => {//拿到偶数位的数组里面的偶数
                     return value % 2 === 0 ;
                 }) ;
}
// var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
// console.log(grouping_average(grouping(even_bit_array(collection_a)))) ;