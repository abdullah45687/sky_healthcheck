document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("signup-btn");
    const nameInput = document.getElementById("signup-name");
    const emailInput = document.getElementById("signup-email");
    const passwordInput = document.getElementById("signup-password");
    const teamSelect = document.getElementById("signup-team");

    signUpBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const team = teamSelect.value.trim();

        if (!name || !email || !password || !team) {
            alert("Please fill in all fields.");
            return;
        }

        // Save user data to localStorage
        const userData = { name, email, password, team };
        localStorage.setItem("registeredUser", JSON.stringify(userData));

        alert("Account created successfully!");
        window.location.href = "/accounts/login/";
    });
});
