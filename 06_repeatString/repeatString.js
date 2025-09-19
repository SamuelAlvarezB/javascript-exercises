const repeatString = function (string, iterations) {
    let repeatedString = "";
    if (iterations < 0) {
        repeatedString = "ERROR";
    } else {
        for (let i = 0; i < iterations; i++) {
            repeatedString += string;
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
