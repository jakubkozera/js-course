// typ string - zadanie
// utwórz funkcje, która zwróci inicjały imienia i nazwisko
// załóż, że jedynym argumentem tej funkcji będzie jedna wartość w postaci 'Imie Nazwisko'
// przetestuj działanie funkcji


function getInitials(fullName) {
    // 'Jakub Kozera'
    let spaceIndex = fullName.indexOf(" ")
    return fullName[0] + fullName[spaceIndex + 1]
}

console.log(getInitials('Jakub Kozera'))
console.log(getInitials('Adam Małysz'))
console.log(getInitials('Mariusz Pudzianowski'))