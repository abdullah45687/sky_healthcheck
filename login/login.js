/* 
STUDENT ID: W1992959 
NAME: HADIA JAVED 
*/

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("LoginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const agreeCheckbox = document.getElementById("agree");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const agreed = agreeCheckbox.checked;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        if (!agreed) {
            alert("You must agree to the terms and conditions to continue.");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

        // check if user exists and credentials match
        if (storedUser && email === storedUser.email && password === storedUser.password) {
            alert("Login successful!");
            window.location.href = "/accounts/home/";
        } else {
            alert("Invalid email or password.");
        }
    });

    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/accounts/signup/";
    });
});
