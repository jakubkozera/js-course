// metoda map

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map((x) =>  x * 2)

console.log(numbers)
console.log(doubledNumbers)

const people = [
    {
        name: "Anna", age: 30
    },
    {
        name: "Jan", age: 25
    },
    {
        name: "Ewa", age: 35
    },
]

const names = people
    .filter(p => p.age >= 30)
    .map(p => p.name)

console.log(names)