const removeFromArray = function(arr, ...args) {

    // search through input array and check if that element is in the removal array

    for(let i = 0; i < arr.length; i++) {
        
        if(args.includes(arr[i])) {
            // Remove the element from the initial array
            arr.splice(i,1);
            i--;
        }
    
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
