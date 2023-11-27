let counter = 0

console.log(counter)

document.getElementById("btn1").addEventListener("click", () => {
   clearTimeout(timeoutId)

})

const timeoutId = setTimeout(function() {

   counter++
   console.log(counter)


}, 2000)