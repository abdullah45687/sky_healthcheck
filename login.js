document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".btn");
  const signupBtn = document.querySelector(".btn.secondary");
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

    // Redirect to user home page after validation
    window.location.href = "userHome.html";
  });

  signupBtn.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
});
