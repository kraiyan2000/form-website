let name = document.getElementById("myname")// nameinput value
let nameerr = document.getElementById("nameerr") // nameP

let name1 = document.getElementById("myname1")// nameinput value
let nameerr1 = document.getElementById("nameerr1") // nameP

let phone = document.getElementById("phone")
let phoneerr = document.getElementById("phoneerr")

let mail = document.getElementById("mail")
let mailerr = document.getElementById("emailerr")

let password = document.getElementById("password")
let passer = document.getElementById("passerr")

let cpass = document.getElementById("cpass")
let cpasserr = document.getElementById("cpasserr")


let button = document.getElementById("button")


button.addEventListener("click", () => {
    let emailValid = "@"
    if (name.value == "" || name1.value == "" || mail.value == "" || password.value == "" || cpass.value == "" || cpass.value != password.value) {

        


        if (name.value == "") {
            nameerr.innerHTML = "Please enter first the name"
            nameerr.style.color = "red"
            nameerr.style.fontSize = "12px"
        }
        else {
            name1.innerHTML = ""
        }
        if (name1.value == "") {
            nameerr1.innerHTML = "Please enter last the name"
            nameerr1.style.color = "red"
            nameerr1.style.fontSize = "12px"
        }
        else {
            name1.innerHTML = ""
        }


        if (phone.value == "") {
            phoneerr.innerHTML = "Enter the phone number"
            phoneerr.style.color = "red";
            phoneerr.style.fontSize = "12px";
        } else {
            phone.innerHTML = "";
        }
       

        if (mail.value.match(emailValid)) {
            mail.innerHTML = ""
        } else {
            mailerr.innerHTML = "Please Enter the email ⓘ"
            mailerr.style.color = "red"
            mailerr.style.fontSize = "12px"
        }

        if (password.value == "") {
            passer.innerHTML = "Enter the password"
            passer.style.color = "red"
            passer.style.fontSize = "12px"
        }
        else {
            password.innerHTML = ""
        }

        if (cpass.value == "") {
            cpasserr.innerHTML = "Please enter the confirm password"
            cpasserr.style.color = "red"
            cpasserr.style.fontSize = "12px"
        }
        else {
            cpass.innerHTML = ""
        }

        if (password == cpass) {
            password.innerHTML = ""
        }
        else {
            cpasserr.innerHTML = "confirm password is not match"
            cpasserr.style.color = "red"
            cpasserr.style.fontSize = "12px"
        }

    }
    else {
        alert("The Form has been Submitted");
    }
})


name.addEventListener("focus", () => {
    nameerr.innerHTML = "First name"
    nameerr.style.color = "black"
    nameerr.style.fontSize = "15px"
})

name1.addEventListener("focus", () => {
    nameerr1.innerHTML = "Last name"
    nameerr1.style.color = "black"
    nameerr1.style.fontSize = "15px"
})

phone.addEventListener("focus", () => {
    phoneerr.innerHTML = "phone Number"
    phoneerr.style.color = "black"
    phoneerr.style.fontSize = "15px"
})

mail.addEventListener("focus", () => {
    mailerr.innerHTML = "Email"
    mailerr.style.color = "black"
    mailerr.style.fontSize = "15px"
})

password.addEventListener("focus", () => {
    passer.innerHTML = "Password"
    passer.style.color = "black"
    passer.style.fontSize = "15px"
})

cpass.addEventListener("focus", () => {
    cpasserr.innerHTML = "Confirm Password"
    cpasserr.style.color = "black"
    cpasserr.style.fontSize = "15px"
})







