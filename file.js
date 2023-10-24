// utwórz funkcje, która przyjmuje dwa parametry: a, b
// rezultatem tej funkcji powinna być wartość typu boolean
// określająca czy liczba a jest podzielna przez b


function isDivisibleBy(a, b) {
    return a % b === 0
}


console.log(isDivisibleBy(6,3))
console.log(isDivisibleBy(6,4))
console.log(isDivisibleBy(5,2))