//  spread operator dla obiektów

const user = { 
    firstName: 'John', 
    age: 30,
}

let userName = {
    lastName: "Doe"
}
let user2 = {
    ...user, 
    ...userName, 
    age: 33}



console.log(user)
console.log(user2)