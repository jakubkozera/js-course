// pętla while i do-while

let i = 0
while (i < 5) {
  if(i === 3) {
    i++;
    continue
  }
  console.log("i",i)
  i++;
}

let j = 0

do {
  if(j === 3) {
    break
  }
  console.log("j", j)
  j++;
} while (j < 5)