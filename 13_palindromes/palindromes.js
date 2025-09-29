const palindromes = function (string = "") {
    let originalString = string.toLowerCase();
    originalString = originalString.replaceAll(" ", "");
    originalString = originalString.replaceAll(",", "");
    originalString = originalString.replaceAll("!", "");
    originalString = originalString.replaceAll(".", "");
    let reverseString = originalString.split("").reverse();
    reverseString = reverseString.join("");
    if (originalString === reverseString) {
        return true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
