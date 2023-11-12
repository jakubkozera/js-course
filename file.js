// (de)serializacja obietków do postaci JSON

const userPreferences = {
    theme: "dark",
    language: "en",
    fontSize: 16,
    showNotifications: true,
    setTheme: function (theme) {
        this.theme = theme
    },
    someUndefinedProp: undefined,
    someNullProp: null,
    gridSettings: {
        pageSize: 10,
        pageNumber: 1
    }
}

const json = JSON.stringify(userPreferences)

console.log(json)
console.log(userPreferences)


const parsedObject = JSON.parse(json)
console.log(parsedObject)
console.log(parsedObject.theme)
console.log(parsedObject.language)
console.log(parsedObject.gridSettings.pageNumber)

