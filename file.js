// pętla while - zadanie
// utwórz metodę 'all', imitującą metodę 'every', dla tablic - wykorzystując pętle while
// powinna przyjąć ona 2 argumenty:
// 1 - dowolna tablica
// 2 - dowolna predykata
// rezultatem z tej metody jest wartość boolean = true, jeżeli wszystkie elementy z tablicy spełniają predykatę
// w przeciwnym wypadku rezultatem jest wartość false

const t1 = [5, 10, 15, 90]

console.log(t1.every(t => t > 0))
console.log(t1.every(t => t % 2 == 0))

function all(array, predicate) {
  let i = 0
  while(i < array.length) {
    const element = array[i]

    if(!predicate(element)) {
      return false
    }
    i++
  }

  return true
}

console.log(all(t1, t => t > 0))
console.log(all(t1, t => t % 2 === 0))