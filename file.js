// operator trójargumentowy - zadanie

// Zad. 1
// Napisz funkcję `markExam`, która przyjmuje wynik testu (w punktach) 
// i zwraca ocenę w formie tekstu. Jeśli wynik jest większy lub równy 70, 
// funkcja powinna zwrócić "Pass", w przeciwnym razie "Fail".

const markExam = (result) => 
    result >= 70 ? "Pass" : "Fail"


console.log(markExam(70))
console.log(markExam(80))
console.log(markExam(8))
console.log(markExam(56))

// Zad. 2
// napisz funkcje, która dla dwóch argumentów liczbowych zwróci większą wartość jako rezultat:

function max(value1, value2) {
    return value1 > value2 ? value1 : value2
}

console.log(max(34,6))
console.log(max(4,36))