'use strict';
var calculate_median = function(collection){
    let arr1 = collection.filter((currentValue, index) => {
        if(index % 2 !==0){
            return currentValue ;
        }
    }) ;//提出第偶数个元素
    if(arr1.length % 2 === 0){
        let arr2 = collection.filter((currentValue, index) => {
            if(index % 2 ===0){
                return currentValue ;
            }
        }) ;
        let L = arr2.length ;
        return arr2[parseInt(L/2)] ;
    }else{
        let L =arr1.length ;
        return arr1[parseInt(L/2)] ;
    }
};
module.exports = calculate_median;

