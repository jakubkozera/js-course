// metoda flat map

const people = [
    {
        name: "Anna", age: 30, phoneNumbers: [ "111-222-333", "444-555-666" ]
    },
    {
        name: "Jan", age: 25, phoneNumbers: [ "777-888-999", "000-111-222" ]
    },
    {
        name: "Ewa", age: 35, phoneNumbers: [ "333-444-555"]
    },
] 

// let allNumbers = []

// people.map(person => person.phoneNumbers)
//         .forEach(phoneNumbers => { allNumbers = allNumbers.concat(phoneNumbers)})

// console.table(allNumbers)

const allNumbers = people.flatMap(person => person.phoneNumbers)
console.table(allNumbers)