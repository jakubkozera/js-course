//  dekonstrukcja obiektu

const user = { 
    firstName: 'John', 
    age: 30,
    address: {
        city: "Kraków",
        street: "Kopernika"
    }
}


// const firstName = user.firstName
// const age = user["age"]

const { firstName, age, address: { city, street = "Długa" } } = user

// console.log(firstName)
// console.log(age)

console.log(city)
console.log(street)

function displayUser({age, firstName}) {
    console.log(firstName)
    console.log(age)
}

displayUser(user)