// tablice

let numbers = [1, 3, 23, 14, 55]

console.log(numbers)

// dostęp do elementu
console.log(numbers[4])

// dodawanie i usuwanie elementów

numbers.push(200)
console.log("after push", numbers)

const popedNumber = numbers.pop()
console.log("popedNumber", popedNumber)
console.log("after pop", numbers)

numbers.unshift(100)
console.log("after unshift", numbers)

const shiftedNumber = numbers.shift()
console.log("shiftedNumber", shiftedNumber)
console.log("after shift", numbers)

numbers.splice(1, 2)
console.log("after splice", numbers)


numbers.splice(1, 0, 999, -444)
console.log("after splice2", numbers)


const index = numbers.lastIndexOf(999)
numbers.splice(index, 1)
console.log("after splice3", numbers)

// filtrowanie tablicy


const bigNumbers = numbers.filter(x => x > 50)

console.log("bigNumbers", bigNumbers)


const biggestNumber = numbers.find(a => a > 100)
console.log("biggestNumber", biggestNumber)


// sprawdzanie tablicy

const includesX = numbers.includes(23)
console.log("includesX", includesX)

console.log("All positive", numbers.every(x => x > 0))
console.log("Any negative", numbers.some(x => x < 0))


// odwracanie tablicy

numbers.reverse()
console.log("after reverse", numbers)