// interpolacja string

// ${}

const firstName = "John"
const lastName = "Doe"
const age = 30

// użycie operatora +

const message1 = "Hello, my name is " + firstName + " " + lastName + " I'm " + age
console.log(message1)
// metoda contact

const message2 = "Hello, my name is ".concat(firstName, " ", lastName, " I'm ", age)
console.log(message2)

// interpolacja string

const message3 = `Hello, my name is ${firstName} ${lastName} I'm ${age}`
console.log(message3)
