// typy wartościowe

let name1 = "Jakub"
let name2 = name1
name2 = "Klaudia"

console.log("name1: ", name1);
console.log("name2: ", name2);


function modifyValueType(x) {
    x = x + 1
}
let x = 100
modifyValueType(x)

console.log(x)

// typy referencyjne
let user = {
    fullName: "John Doe",
    age: 30,
}

let user2 = user
user2.fullName = "Test user"

function modifyReferenceType(obj) {
    obj.age = obj.age + 1
}

modifyReferenceType(user)

console.log(user)
console.log(user2)