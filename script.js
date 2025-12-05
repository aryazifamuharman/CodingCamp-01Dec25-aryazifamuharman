// GREETING NAME
let username = prompt("What is your name?");
document.getElementById("username").innerText = username;

// FORM VALIDATION
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("userMessage").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Semua field wajib diisi!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Email tidak valid!");
        return false;
    }

    if (isNaN(phone)) {
        alert("Nomor telepon harus angka!");
        return false;
    }

    // Output ke preview
    document.getElementById("out-name").innerText = name;
    document.getElementById("out-email").innerText = email;
    document.getElementById("out-phone").innerText = phone;
    document.getElementById("out-msg").innerText = message;

    return false; // supaya tidak reload page
}