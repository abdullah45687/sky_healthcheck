/* 
STUDENT ID: W1992959 
NAME: HADIA JAVED 
*/

document.addEventListener("DOMContentLoaded", function () {
    // get the confirm button
    const confirmBtn = document.getElementById("forgot-password-confirm-btn");

    // get the email input field
    const emailInput = document.getElementById("forgot-password-email");

    // get the new password input field
    const newPasswordInput = document.getElementById("forgot-password-new-password");

    // get the re-enter password input field
    const reenterPasswordInput = document.getElementById("forgot-password-reenter-password");

    // when user clicks the confirm button
    confirmBtn.addEventListener("click", function (e) {
        e.preventDefault(); // stop the form from submitting

        // get input values
        const email = emailInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const reenterPassword = reenterPasswordInput.value.trim();

        // check if any field is empty
        if (!email || !newPassword || !reenterPassword) {
            alert("Please fill in all fields.");
            return;
        }

        // check if passwords match
        if (newPassword !== reenterPassword) {
            alert("Passwords do not match. Please re-enter your password.");
            return;
        }

        // get user from localStorage
        const user = JSON.parse(localStorage.getItem("registeredUser"));

        // check if email matches stored user
        if (user && user.email === email) {
            user.password = newPassword; // update password
            localStorage.setItem("registeredUser", JSON.stringify(user));

            alert("Password changed successfully!");
            window.location.href = "/accounts/login/";
        } else {
            alert("Email not found. Please check and try again.");
        }
    });
});
