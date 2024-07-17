const reverseString = function(string) {

    if (string.length == 0) {
        return "";
    }

    let reverse = [string.length];
    let pos = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        reverse[pos] = string.at(i);

        pos++;
    }
    // returns string without commas
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
