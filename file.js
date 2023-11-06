// pętla for-of
// utwórz metodę imitującą metodę some, która przyjmuje 2 argumenty
// 1 - dowolną tablicę t
// 2 - predykatę (funkcję zwracającą true/false)
// rezultatem z tej metody powinna być wartość boolean, określający czy w danej tablicy jest jaki kolwiek element
// który spełnia daną predykatę
// przykładowo:

const numbers = [1, 2, 3, 6, 90] 
console.log(numbers.some(n => n % 2 === 0))
console.log(numbers.some(n => n < 0))

function some(arr, predicate) {

  for (const element of arr) {
    if(predicate(element)) {
      return true
    }
  }
  return false
}

console.log(some(numbers, n => n % 2 === 0))
console.log(some(numbers, n => n < 0))