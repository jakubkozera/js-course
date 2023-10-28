// wykorzystując funkcje foreach, stwórz funkcje, która zwróci sume wszystkcich elementów tablicy
// oraz drugą funkcje, która zwróci średnią wartość elementów tablicy, zaokrągloną w dól (Math.floor)

const t = [23, 12, 5, 9, 45]

function sum(arr) {
    let sum = 0
    arr.forEach((element) => sum += element)

    return sum
}

function average(arr) {
    return Math.floor(sum(arr) / arr.length)
}

console.log(sum(t))
console.log(average(t))