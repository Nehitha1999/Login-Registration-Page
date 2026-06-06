const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
    registerForm.classList.add("active-form");
    loginForm.classList.remove("active-form");

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

// Login Redirect
loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    // Here you can validate email/password

    alert("Login Successful!");

    // Redirect to Dashboard
    window.location.href = "dashboard.html";
});

// Register
registerForm.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Account Created Successfully!");

    loginBtn.click();
});

// Show/Hide Password
document.querySelectorAll(".togglePassword").forEach(icon => {
    icon.addEventListener("click", () => {

        const input = icon.previousElementSibling;

        if(input.type === "password"){
            input.type = "text";
            icon.classList.replace("fa-eye","fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash","fa-eye");
        }
    });
});
