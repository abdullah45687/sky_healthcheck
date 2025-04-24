document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.querySelector(".btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!name || !email || !password) {
      alert("Please enter your name, email, and password.");
      return;
    }

    // Show alert and then redirect
    alert("Account created successfully");
    window.location.href = "login.html";
  });
});
