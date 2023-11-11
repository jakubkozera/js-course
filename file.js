//  null-safety dla obiektów

const user = { 
    firstName: 'John', 
    age: 30,
    // address: {
    //     city: "Kraków",
    //     street: "Kopernika"
    // }
}

// const { firstName, age, address: { city, street } } = user


const city = user.address?.city || "Warszawa"
console.log(city)

console.log(0 || 50)
console.log(0 ?? 50)

console.log("" || "default")
console.log("" ?? "default")