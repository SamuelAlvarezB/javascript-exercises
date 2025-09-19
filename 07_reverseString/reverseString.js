const reverseString = function (string = "") {
    let array = string.split("");
    array = array.reverse();
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
