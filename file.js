//  dekonstrukcja tablic

const coordinates = [150, 424, 5] // [x, y, z]

// const x = coordinates[0]
// const y = coordinates[1]
// const z = coordinates[2]

const [x, y, z] = coordinates 

console.log(x)
console.log(y)
console.log(z)

// pomijanie elementów

const fruits = ["apple", "oragne", "banana"]

const [firstFruit, , thirdFruit] = fruits

console.log(firstFruit)
console.log(thirdFruit)

// reszta tablicy

const colors = ["red", "green", "blue", "yellow"]

const [primary, ...restColors] = colors


console.log(primary)
console.log(restColors)

// domyślne wartości

const values = [1, 3]

const [firstValue, secondValue = 5] = values

console.log(firstValue)
console.log(secondValue)