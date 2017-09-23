'use strict';
var rank_desc = require('../../../practices/map/rank_desc.js');//从小到大
var rank_asc = require('../../../practices/map/rank_asc.js');//从大到小
var even_asc_odd_desc = function(collection){
    let evenarr = collection.filter((value) => {
        return value % 2 === 0 ;
    }) ;
    let oddarr = collection.filter((value) => {
        return value % 2 !== 0 ;
    }) ;
    return rank_desc(evenarr).concat(rank_asc(oddarr)) ;
};
module.exports = even_asc_odd_desc;
// var collection = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
// let evenarr = collection.filter((value) => {
//     return value % 2 === 0 ;
// }) ;
// let oddarr = collection.filter((value) => {
//     return value % 2 !== 0 ;
// }) ;

// let  b = rank_desc(evenarr).concat(rank_asc(oddarr)) ;
// console.log(b) ;