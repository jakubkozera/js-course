// pętla for

for (let i = 0; i < 5; i++) {
  console.log(i)
}

const number = [1, 2, 3, 6, 90]

let sum = 0

for(let i = 0; i < number.length; i++) {

  let value = number[i]
  if(value % 2 !== 0) {
    continue;
  }
  sum += value
  console.log("Adding " + value)
  console.log("--")

}

console.log(sum)