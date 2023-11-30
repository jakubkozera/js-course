localStorage.setItem("language", "pl")
localStorage.setItem("theme", "dark")

const themeColor = localStorage.getItem("theme")
console.log(themeColor)

localStorage.removeItem("theme")


const themeColor2 = localStorage.getItem("theme")
console.log(themeColor2)

localStorage.clear()

const userSettings = {
   theme: "dark",
   lang: "en"
}

localStorage.setItem("settings", JSON.stringify(userSettings))

const storedSettings = JSON.parse(localStorage.getItem("settings"))
console.log(storedSettings)