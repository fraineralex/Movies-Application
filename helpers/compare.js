const IsEqual = function(gender, value){

    let isValid = true
    
    if(gender === value){
        isValid = true;
    }else{
        isValid = false;
    }

    return isValid;
}


exports.IsEqual = IsEqual;