'use strict';

function compute_chain_median(collection) {
  let a = collection.split("->");
  let L = a.length;
  if(L % 2 === 0){
    return (parseInt(a[L/2])+parseInt(a[L/2+1]))/2;
  }else{
    return a[parseInt(L/2+1)] ;
  }
}

module.exports = compute_chain_median;
// var chain = '4->6->2->3->10->9->8->11->20->19->30';
// let a = chain.split("->");
// console.log(a);
// let L = a.length;
// if(L % 2 === 0){
//   console.log((parseInt(a[L/2])+parseInt(a[L/2+1]))/2);
// }else{
//   console.log(a[parseInt(L/2+1)]) ;
// }