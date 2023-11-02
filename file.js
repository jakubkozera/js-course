// object

const user = {
    fullName: "John Doe",
    age: 30,
    money: 0,
    work: function() {
        console.log(this.fullName + " is working")
        this.money += 50
    }
}


console.log(user.toString())
console.log(user.hasOwnProperty("non"))
console.log("Keys: ", Object.keys(user))
console.log("Values: ", Object.values(user))
console.log("Entires: ", Object.entries(user).map((entry) => entry[0] + ":" + entry[1])) // [["fullName":"John Doe"], ["age": "30"], ["money": "0"], ["work": ".."]]

let user2 = {     
    fullName: user.fullName,
    age: user.age,
    money: user.money,
    work: user.work
} 

// Object.assign(user2, user)

user2.fullName = "Test user"

console.log(user)
console.log(user2)