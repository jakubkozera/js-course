// pętla for - zadanie
// utwórz metodę imitującą metodę filter, która przyjmuje 2 argumenty
// 1 - dowolną tablicę t
// 2 - predykatę (funkcję zwracającą true/false)
// rezultatem z tej metody powinna być nowa tablica zawierająca elementy tablicy t, które spełniają daną predykatę
// przykładowo:

const numbers = [1, 2, 3, 6, 90]
const filteredNumbers = numbers.filter(n => n % 2 === 0) // [2, 6, 90]
console.log(filteredNumbers)

function filter(arr, predicate) {
  
  let result = []
  for(let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if(predicate(value)) {
      result.push(value)
    }
  }
  return result
}

const people = [{
  fullName: "Test1",
  age: 30
},
{
  fullName: "Test2",
  age: 32
},
{
  fullName: "Test3",
  age: 33
}]

console.log(filter(numbers, n => n % 2 === 0))

console.table(filter(people, p => p.age >= 32))