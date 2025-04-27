// Login Va Parolni tekshirish
// document.addEventListener("DOMContentLoaded", () => {
//     const login_btnEl = document.querySelector(".login_btn");
//     const loginEl = document.querySelector(".login");

//     loginEl.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const loginInput = document.querySelector('.user').value;
//         const passwordInput = document.querySelector('.password').value;

//         const checkLogin = "User123";
//         const checkPass = "Parol123";

//         if (loginInput === checkLogin && passwordInput === checkPass) {
//             window.location.href = "./html/page.html";
//         } else {
//             alert("Login yoki parolda xatolik bor!");
//         }
//     });
// });


// Tablega ma'lumot qo'shish

let users = [
    {
        fname: "Javlonbek",
        lname: "Jalilov"
    },
    {
        fname: "Jasurber",
        lname: "Xamidov"
    }
]

const create_btnEl = document.getElementById("create_btn")
const tbodyEl =  document.querySelector("tbody")
create_btnEl.addEventListener("submit", ()=>{
    const fnameInputEl = document.getElementById("fname")
    const lnameInputEl = document.getElementById("lname")

    if (fnameInput.trim() === "" || lnameInput.trim() === "") {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    const newUser = {
        fname: fnameInput,
        lname: lnameInput
    };

    users.push(newUser);

    tbodyEl.appendChild(users)

})

users.forEach((user, index)=>{
    let tr = document.createElement("tr")
    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.fname}</td>
        <td>${user.lname}</td>
    `
    tbodyEl.appendChild(tr)
    console.log(tr);
})
