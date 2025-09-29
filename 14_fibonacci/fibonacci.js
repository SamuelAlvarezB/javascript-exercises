const fibonacci = function (num) {
    let fibonacciSequence = [1, 1];
    num = Number.parseInt(num);
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i < num; i++) {
            fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
        }
        return fibonacciSequence[num - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
