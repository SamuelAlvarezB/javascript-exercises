const removeFromArray = function (array, ...otherArgs) {
    for (let arg of otherArgs) {
        if (array.includes(arg)) {
            while (array.includes(arg)) {
                array.splice(array.findIndex((element) => element === arg), 1);
            }
        }
    };
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
