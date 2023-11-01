// daty: zadanie 1
// utwórz funkcje, która przymuje jeden parametr z wartością typu string, do której będzie przekazana data urodzin
// np pod postacią "1990/05/25"
// w ramach rezultatu, funkcja zwróć wartość typu boolean, określająca czy dla tej daty osoba jest pełnoletnia

function isAdult(birthDate) {
    const birthDateObj = new Date(birthDate)

    const currentDate = new Date()

    const eighteenYearAgo = new Date();

    eighteenYearAgo.setFullYear(currentDate.getFullYear() - 18)
    return birthDateObj <= eighteenYearAgo
}

console.log(isAdult("1990/05/25"))
console.log(isAdult("2020/05/25"))
console.log(isAdult("2005/10/31"))

// zadanie 2
// utwórz funkcje, która przymuje jeden parametr z wartością typu string, do której będzie przekazana data urodzin
// np pod postacią "1990/05/25"
// w ramach rezultatu, funkcja zwróci liczbę dni do osiągnięcia pełnoletności 


function daysUntilAdulthood(birthDate) {
    const birthDateObj = new Date(birthDate)

    const currentDate = new Date()

    const eighteenYearAgo = new Date();

    eighteenYearAgo.setFullYear(currentDate.getFullYear() - 18)

    const msToAdulthood = birthDateObj - eighteenYearAgo

    const daysToAdulthood = Math.floor(msToAdulthood / (1000 * 60 * 60 * 24))

    return daysToAdulthood
}

console.log(daysUntilAdulthood("2020/05/25"))
