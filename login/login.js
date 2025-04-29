/* 
STUDENT ID: W1992959 
NAME: HADIA JAVED 
*/

document.addEventListener("DOMContentLoaded", function () {
    // get the login button
    const loginBtn = document.getElementById("LoginBtn");

    // get the signup button
    const signupBtn = document.getElementById("signupBtn");

    // get the email input field
    const emailInput = document.getElementById("email");

    // get the password input field
    const passwordInput = document.getElementById("password");

    // get the agree to terms checkbox
    const agreeCheckbox = document.getElementById("agree");

    // when user clicks the login button
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault(); // stop the form from submitting

        // get the input values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const agreed = agreeCheckbox.checked;

        // check if email and password are entered
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // check if user agreed to terms
        if (!agreed) {
            alert("You must agree to the terms and conditions to continue.");
            return;
        }

        // if everything is fine, go to home page
        window.location.href = "/accounts/home/";
    });

    // when user clicks the signup button
    signupBtn.addEventListener("click", function (e) {
        e.preventDefault(); // stop the form from submitting
        window.location.href = "/accounts/signup/";
    });
});
