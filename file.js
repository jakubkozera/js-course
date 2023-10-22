function helloName(name) {

    let result = "hello, " + name
    return result

}

const variableFunction = function(name) {

    let result = "hello, " + name
    return result
}

const arrowFunction = (name) => {

    let result = "hello, " + name
    return result
}


let testName = "test"

const result1 = variableFunction("Kuba")
console.log(result1)

const result2 = helloName(testName)
console.log(result2)

const resultFromArrowFunction = arrowFunction("arrow")
console.log(resultFromArrowFunction)

const result3 = helloName()
