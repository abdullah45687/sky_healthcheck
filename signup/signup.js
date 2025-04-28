document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.querySelector(".btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const teamSelect = document.getElementById("team"); // NEW

  signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const team = teamSelect.value.trim(); // NEW

    if (!name || !email || !password || !team) {
      alert("Please enter your name, email, password, and select a team.");
      return;
    }

    alert("Account created successfully");
    window.location.href = "login.html";
  });
});
