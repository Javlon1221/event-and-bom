// Login Va Parolni tekshirish

// const login_btnEl = document.querySelector(".login_btn")
// const loginEl = document.querySelector(".login")

// loginEl.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const loginInput = document.querySelector('.user').value;
//     const passwordInput = document.querySelector('.password').value;

//     const checkLogin = "User123";
//     const checkPass = "Parol123";

//     if(loginInput === checkLogin && passwordInput === checkPass){
//         window.location.href = "./html/page.html"
//     }else{
//         alert("Login yoki parolda xatolik bor!")
//     }

// })

// Tablega ma'lumot qo'shish

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

// button bosilganda create_table ochiladi

const toggleCreateTableBtn = document.getElementById("toggle_create_table");
const createTableDiv = document.querySelector(".create_table");

toggleCreateTableBtn.addEventListener("click", function() {
    createTableDiv.classList.toggle("show");
});
