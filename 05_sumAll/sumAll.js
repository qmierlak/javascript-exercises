const sumAll = function(val1, val2) {
    let sum = 0;
    let larger = val2;
    let smaller = val1;

    if(!(Number.isInteger(val1) && Number.isInteger(val2))) {
        return "ERROR";
    }
    
    if(val1 < 0 || val2 < 0) {
        return "ERROR";
    }


    if(val1 > val2) {
        larger = val1;
        smaller = val2
    }

    for (let i=smaller; i<=larger; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
