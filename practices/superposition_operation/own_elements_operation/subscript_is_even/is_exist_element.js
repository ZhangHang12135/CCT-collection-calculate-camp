'use strict';
var is_exist_element = function(collection,element){
    let evenIndexArray = collection.filter((value,index) => {
        if(index % 2 === 0){
            return value ;
        }
    } ) ;
    if(evenIndexArray.indexOf(element) !== -1){
        return true ;
    }else{
        return false ;
    }
};
module.exports = is_exist_element;
