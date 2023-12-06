window.onload = async () => {
    const tableBody = document.querySelector("table tbody")
    const apiBaseUrl = "https://users-api-jk.azurewebsites.net"
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