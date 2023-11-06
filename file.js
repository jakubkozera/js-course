// pętla for-of

const fruits = ["apple", "banana", "orange"]

for (const fruit of fruits) {
  if(fruit.length > 5) {
    continue;
  } 
  console.log(fruit)
}

const numbers = [1,2,3,4, 90]

let sum = 0;

for (const value of numbers) {
  sum += value
}

console.log(sum)