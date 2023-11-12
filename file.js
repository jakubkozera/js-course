// try-catch-finally

function processUser(user) {
    try {
        console.log(`Processing: ${user.fullName.toUpperCase()}`)
    } catch (error) {
        // console.error(error)
        console.error("Error when processing user")
        console.error("Please enter a valid fullName user property")
    }
     finally {
        console.log("finished processing user")
    }
    console.log("finished processing user outside finally")

}

const user = {
    fullName: "John Doe"
}

// processUser(user)

console.log('finished')

function getAgeDiscount(age) {
    if(!(age > 0)) {
        throw new Error(`${age} is not valid age`)
    } 
    console.log("Discount is " + age)
}

getAgeDiscount(-1)