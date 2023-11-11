//  spread operator dla obiektów - zadanie
// utwórz metodę przyjmującą 2 argumenty:
// 1 - dowolna tablica obiektów (t)
// 2 - dowolny obiekt (o)
// w ramach rezultatu zwróc tablice elementów t, rozszerzonych o właściwości znajdujące się w obiekcie o

const people = [{ 
    firstName: "John", 
    lastName: "Doe"
}, 
{
    firstName: "Paul",
    lastName: "Walker"
}]

let additionalProperties = {
    age: 30,
    gender: "Male"
}


const extendObjects = (array, addinalProps) => 
    array.map(e => ({
            ...e,
            ...addinalProps
    }))


console.table(extendObjects(people, additionalProperties))

// rezultat
// [
//     {
//       firstName: "John",
//       lastName: "Doe",
//       age: 30,
//       gender: "Male"
//     },
//     {
//       firstName: "Paul",
//       lastName: "Walker",
//       age: 30,
//       gender: "Male"
//     }
//   ]
  