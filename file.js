// pętla for-in - zadanie
// dla poniższego obiektu people,który przechowuje imię osoby oraz wyniki z testów pod postacią tablicy
// napisz kod, który wypisze do konsoli, które osoby miały conajmniej 1 wynik, który przekraczał próg 70 pkt
const people = {
  "Adam": [23, 55, 53],
  "John": [53, 59, 73],
  "Pete": [3, 5, 2],
  "Tomasz": [64, 75, 56],
}


for(const person in people) {
  const results = people[person] // [23, 55, 53]
  const hasHighScore = results.some(r => r > 70)
  if(hasHighScore) {
    console.log(`${person} has scored a high score`)
  }
}
