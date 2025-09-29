const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let result = 1;
  if (a != 0 && a != 1) {
    let numArray = [];
    for (let i = 1; i <= a; i++) {
      numArray.push(i);
    }
    result = numArray.reduce((total, currentValue) => total * currentValue, 1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
