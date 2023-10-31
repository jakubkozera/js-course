// obiekty

const user = {
    fullName: "John Doe",
    age: 30,
    money: 0,
    work: function() {
        console.log(this.fullName + " is working")
        this.money += 50
    },
    "# someProperty": "some value"
}

console.log(user)
console.log(user.age)
console.log(user.fullName)
console.log(user.money)

user.work()
console.log(user.money)
user.money = 5000
console.log(user.money)

const propName = "# someProperty s"
console.log(user[propName])
