// utwórz funkcje, która przyjmuje dwa parametry: imie i nazwisko, a w rezultacie zwróci jedną wartość 'imie nazwisko'
// zdefiniuj ją za pomocą słowa kluczowego function, zdefiniuj jako zmienną z funkcją anonimową oraz funkcje strzałkową (3 warianty)
// całość przetestuj

function getDisplayName1(firstName, lastName) {
    return firstName + " " + lastName
}

const getDisplayName2 = function(firstName, lastName) {
    return firstName + " " + lastName
}

const getDisplayName3 = (firstName, lastName) => {
    return firstName + " " + lastName
}

console.log(getDisplayName1("Test", "Display1"))
console.log(getDisplayName2("Test", "Display2"))
console.log(getDisplayName3("Test", "Display3"))