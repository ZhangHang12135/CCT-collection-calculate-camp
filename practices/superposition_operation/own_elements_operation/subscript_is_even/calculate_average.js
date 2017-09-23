'use strict';
var calculate_average = function(collection){
    let arr =  collection.filter((value,index)=>{
        if(index % 2 !== 0){
            return value ;
        }
    }) ;
    let L =arr.length ;
    return arr.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue ;
    },0)/L ;
  
};
module.exports = calculate_average;