// debuggowanie programu
function displayUser(firstName, lastName, age) {
    // użycie operatora +

    const message1 = "Hello, my name is " + firstName + " " + lastName + " I'm " + age
    console.log(message1)
    // metoda contact

    const message2 = "Hello, my name is ".concat(firstName, lastName, " I'm ", age)
    console.log(message2)

}

let firstName = "John"
const lastName = "Doe"
const age = 30


// interpolacja string

const message3 = `Hello, my name is ${firstName} ${lastName} I'm ${age}`
console.log(message3)

firstName = "NotJohn"

displayUser(firstName, lastName, age)

displayUser("Paul", "Walker", 35)

console.log('end')
