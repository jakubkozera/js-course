
 const regex = /^([a-z0-9]+)\.?([a-z0-9]+)@([a-z]+)\.[a-z]{2,3}$/
 const email = "test.tests2@gmail.com"

 const isMatch = regex.test(email)

 console.log(isMatch)

 let orginalString = "Hello, Hello, world"

 let modifiedString = orginalString.replace(/Hello/g, "Hi")
 console.log(modifiedString)