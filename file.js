// obiekty

const user = {
    fullName: "John Doe",
    age: 30,
    money: 0,
    work: function() {
        console.log(this.fullName + " is working")
        this.money += 50
    }
}

console.log(user)
console.log(user.age)
console.log(user.fullName)
console.log(user.money)

user.work()
console.log(user.money)
user.money = 5000
console.log(user.money)


// dynamiczne odnoszenie się do właściwości i ich wartości
console.log(Object.values(user))
const properties = Object.getOwnPropertyNames(user)

const firstProperty = properties[0]
console.log(firstProperty, user[firstProperty])

console.log(properties.map(property => property + ":" + user[property] ))