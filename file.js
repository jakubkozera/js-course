window.onload = () => {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault()

        const form = document.querySelector("form")

        const formData = new FormData(form)
        const userData = Object.fromEntries(formData)

        console.log(userData)
        console.log(form.action)
        console.log(form.method)
        // const usernameValue = document.getElementById("username").value
        // const passwordValue = document.getElementById("password").value

        // const userData = {
        //     username: usernameValue,
        //     password: passwordValue
        // }

        // console.log(userData)
    })
}