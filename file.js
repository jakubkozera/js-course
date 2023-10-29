// tablice - foreach
const t = [23, 12, 5, 9, 45]

t.forEach((element, index, arr) => {
    console.log("Index: " + index + ", wartość: " + element)
    arr[index] =  element ** 2
})

console.log(t)