window.onload = async () => {
  let currentPage = 1;
  let pageSize = 5;
  let filter = "";
  const apiBaseUrl = "https://users-api-jk.azurewebsites.net";
  function generatePagination(totalItems, pageSize) {
    const paginationElement = document.querySelector(".pagination");
    paginationElement.innerHTML = ""; // clear existing pagination

    const totalPages = Math.ceil(totalItems / pageSize);

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");

      // Add 'active' class if this page is the current page
      if (i === currentPage) {
        li.classList.add("active");
      }

      const a = document.createElement("a");
      a.classList.add("page-link");
      a.href = "#";
      a.textContent = i.toString();
      a.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = i;
        renderUsers();
      });

      li.appendChild(a);
      paginationElement.appendChild(li);
    }
  }

  await renderUsers();
  async function renderUsers() {
    const tableBody = document.querySelector("table tbody");
    const response = await fetch(
      `${apiBaseUrl}/api/Users/paged?page=${currentPage}&pageSize=${pageSize}&filter=${filter}`
    );
    const data = await response.json();
    generatePagination(data.totalItems, pageSize);
    console.log("data", data);
    const userRows = data.items.map((user) => {
      return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.address.city}</td>
            <td>${user.address.zipCode}</td>
            </tr>`;
    });

    tableBody.innerHTML = userRows.join("");
  }
  document
    .getElementById("pageSizeSelect")
    .addEventListener("change", async function (event) {
      pageSize = event.target.value;
      await renderUsers();
    });

  document
    .getElementById("filterInput")
    .addEventListener("input", function (event) {
      filter = event.target.value;
      renderUsers();
    });

  document
    .getElementById("addUserForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const form = document.getElementById("addUserForm");

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      const formData = new FormData(form);

      const serializedData = {};
      for (let [key, value] of formData.entries()) {
        // debugger
        const keys = key.split(".");
        const lastKey = keys.pop();
        let obj = serializedData;
        for (let k of keys) {
          obj[k] = obj[k] || {};
          obj = obj[k];
        }
        obj[lastKey] = value;
      }
      const json = JSON.stringify(serializedData);
      console.log(json);

      const createUserResponse = await fetch(`${apiBaseUrl}/api/Users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      if (createUserResponse.ok) {
        alert("User created");
        const closeModalBtn = document.getElementById("closeModalBtn");
        closeModalBtn.click();
        await renderUsers();
      } else if (createUserResponse.status === 400) {
        const responseBody = await createUserResponse.json();
        const errorMessages = Object.values(responseBody.errors)
          .flatMap((x) => x)
          .join("\n");
        alert("Fix your validation erros: \n" + errorMessages);
      } else {
        alert("Something went wrong");
      }
    });
};
