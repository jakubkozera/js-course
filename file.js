// instrukcja switch - zadanie
// Napisz funkcje, która dla oceny od 1 do 5
// Zwróci jej tekstową reprezentacje
// stopień bardzo dobry – 5,
// stopień dobry – 4,
// stopień dostateczny – 3,
// stopień dopuszczający – 2,
// stopień niedostateczny – 1
// dla "nieprawidłowej" oceny, zwróci odpowiednia informacje

function getGrade(grade) {
    switch(grade) {
        case 1:
            return "niedostateczny"
        case 2:
            return "dopuszczający"
        case 3:
            return "dostateczny"
        case 4:
            return "dobry"
        case 5:
            return "bardzo dobry"
        default:
            return "nieprawidłowa ocena"
    }
}

console.log(getGrade(1))
console.log(getGrade(2))
console.log(getGrade(3))
console.log(getGrade(4))
console.log(getGrade(5))
console.log(getGrade(235))
console.log(getGrade(51))