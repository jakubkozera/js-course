// typ boolean

let firstValue = true
let secondValue = false


let andResult = firstValue && secondValue
console.log(andResult)

let orResult = firstValue || secondValue
console.log(orResult)

let notResult = !firstValue
console.log(notResult)

let longExpression = firstValue || secondValue && orResult || !notResult

// nawiasy

let a = false;
let b = true;
let c = false;

let resultWithoutParentheses = b || a && c;
console.log(resultWithoutParentheses); // true

let resultWithParentheses = (b || a) && c;
console.log(resultWithParentheses); // false
