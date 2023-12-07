window.onload = async () => {
    const apiBaseUrl = "https://users-api-jk.azurewebsites.net"

    await renderUser()
    async function renderUser() {
        const tableBody = document.querySelector("table tbody")
        const respone = await fetch(`${apiBaseUrl}/api/Users`)
        console.log(respone)
        const data = await respone.json()
        console.log('data', data)
        const userRows = data.map(user => {
            return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.address.city}</td>
            <td>${user.address.zipCode}</td>
            </tr>`
        })
    
        tableBody.innerHTML = userRows.join("")
    }



    document.getElementById("addUserForm").addEventListener("submit", async function (event) {
        event.preventDefault()

        const form = document.getElementById("addUserForm")

        if(!form.checkValidity()) {
            form.classList.add("was-validated")
            return
        }

        const formData = new FormData(form)
       
        const serializedData = {};
        for (let [key, value] of formData.entries()) {
            // debugger
            const keys = key.split('.');
            const lastKey = keys.pop();
            let obj = serializedData;
            for (let k of keys) {
                obj[k] = obj[k] || {};
                obj = obj[k];
            }
            obj[lastKey] = value;
        }
        const json = JSON.stringify(serializedData);
        console.log(json)

        const createUserResponse = await fetch(`${apiBaseUrl}/api/Users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        })

        if(createUserResponse.ok) {
            alert("User created")
            const closeModalBtn = document.getElementById("closeModalBtn")
            closeModalBtn.click()
            await renderUser()

        } else if (createUserResponse.status === 400) {
            const responseBody = await createUserResponse.json()
            const errorMessages = Object.values(responseBody.errors).flatMap(x => x).join("\n")
            alert("Fix your validation erros: \n" + errorMessages)
        }
        else {
            alert("Something went wrong")
        }

    })
}