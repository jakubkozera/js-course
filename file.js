// sortowanie tablic
const t = [23, 12, 5, 9, 45, 453, 1000]

t.sort((a, b) => b - a)

// wynik ujemny - a jest mniejsze od b
// wynik dodatni - a jest większe od b
// wynik 0 - a jest równe b
console.log(t)

const names = [ "Jakub", "Karolina", "Mariusz", "Adam"]
names.sort((a, b) => b.length - a.length)

console.log(names)

const people = [
    {
        name: "Jakub Kozera",
        age: 28
    },
    {
        name: "Mariusz Pudzianowksi",
        age: 46
    },
    {
        name: "Adam Małysz",
        age: 45
    }
]

people.sort((a, b) => b.age - a.age)

console.table(people)