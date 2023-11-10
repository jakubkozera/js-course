//  spread operator

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]

const result = [9, ...numbers1, ...numbers2]
// result[0] = 5

console.log(numbers1)
console.log(result)