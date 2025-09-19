const sumAll = function (a, b) {
    let newArray = [a, b];
    if (a < 0 || b < 0 || a % 1 != 0 || b % 1 != 0 || typeof (a) != "number" || typeof (b) != "number") {
        return "ERROR";
    }
    if (a < b) {
        let count = a + 1;
        while (count < b) {
            newArray.push(count);
            count++;
        }
    } else if (b < a) {
        let count = b + 1;
        while (count < a) {
            newArray.push(count);
            count++;
        }
    }

    return newArray.reduce((total, value) => total + value);
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
