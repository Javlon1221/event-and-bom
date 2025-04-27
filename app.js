const create_btnEl = document.getElementById("create_btn");
const tbodyEl = document.querySelector("tbody");
const users = [];

create_btnEl.addEventListener("click", (event) => {
    event.preventDefault(); 
    const fnameInputEl = document.getElementById("fname");
    const lnameInputEl = document.getElementById("lname");

    const fname = fnameInputEl.value.trim();
    const lname = lnameInputEl.value.trim();

    
    if (fname === "" || lname === "") {
        alert("Bo'sh hududni to'ldiring!"); 
        return;
    }
    const newUser = { fname, lname };
    users.push(newUser);
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${users.length}</td>
        <td>${newUser.fname}</td>
        <td>${newUser.lname}</td>
    `;
    tbodyEl.appendChild(tr);
    
    fnameInputEl.value = "";
    lnameInputEl.value = "";
});