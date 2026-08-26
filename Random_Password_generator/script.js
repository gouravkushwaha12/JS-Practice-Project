const passwordbox = document.getElementById("Password");
const button = document.getElementById("btn");
const copybtn=document.getElementById("copypass");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const special = "!@#$%^&*<>?:|\][()";
const allchar = uppercase + lowercase + digits + special;

function createpassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordbox.value = password;
}
button.addEventListener("click", () => {
    createpassword();
})

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}

copybtn.addEventListener("click",()=>{
    copyPassword();
})
