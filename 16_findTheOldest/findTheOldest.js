const findTheOldest = function (people) {
    for (person of people) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }
    return people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
