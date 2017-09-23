'use strict';
var single_element = function(collection){
    let evenBitArray = collection.filter((value,index) => {
        if(index % 2 !== 0){
            return value ;
        }
    }) ;
    return norepeatArray2(evenBitArray) ;
};
module.exports = single_element;
function norepeatArray(array){
    let obj = {} ;
    let norepeatarray = [] ;
    //存入一个对象，key：value
    for(let value of array){
        if(!obj[value]){
            obj[value] = 1 ;
        }else{
            obj[value] ++ ;
        }
    }//key值自动排序了，我他妈脸都被打歪了，一口老血

    //删除重复了的元素，即删除value>1的
    for(let key of Object.keys(obj)){
        if(obj[key] !== 1){
            delete obj[key] ;
        }
    }
    //变成number数组
    for(let value of Object.keys(obj)){
        norepeatarray.push(parseInt(value)) ;
    }
    return norepeatarray ;
}
function norepeatArray2(array){
    for(let i = 0 ; i < array.length; i ++){
        for(let j = 0 ;j < array.length ;j ++){
            if(array[i] === array[j]){
                //这样删不了三个重复的，
                // array.splice(j,1) ;//先删除后面的
                // array.splice(i,1) ;//再删除前面的
                //脑阔疼
            }
        }
    }
    return array ;
}
// var collection_a = [ 2, 2, 6, 43, 5];
// let obj = norepeatArray2(collection_a) ;

// console.log(obj) ;
// for(let key of Object.keys(obj)){
//     if(obj[key] !== 1){
//         delete obj[key] ;
//     }
// }
// console.log(obj) ;
