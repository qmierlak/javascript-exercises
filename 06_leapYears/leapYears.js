const leapYears = function(year) {

    // Leap years are divisible by four
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
