function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b - 1;
}

module.exports = {sum, diff};

let firstSummand = 5;
let secondSummand = 5;
console.log(`The sum of ${firstSummand} + ${secondSummand} is ${sum(firstSummand, secondSummand)}`);
console.log(`The difference of ${firstSummand} - ${secondSummand} is ${diff(firstSummand, secondSummand)}`);