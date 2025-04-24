// Wait until the entire page content (HTML) is loaded before running this script
document.addEventListener("DOMContentLoaded", function () {

  // pointing out login and signup buttons by class names
  const loginBtn = document.querySelector(".btn");
  const signupBtn = document.querySelector(".btn.secondary");

  // pointing out email and password input fields by IDs
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // selects the terms and conditions checkbox by its ID
  const agreeCheckbox = document.getElementById("agree");

  // adding click event listener to the login button so that it redirects user
  loginBtn.addEventListener("click", function (e) {
    // prevent the default submission so that all checks can be completed
    e.preventDefault();

    // retrieves what the user typed in and remove any spaces at the beginning or end
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const agreed = agreeCheckbox.checked;

    // if email or password is empty, shows an alert and stop
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // if terms checkbox is not checked, shows an alert and stop
    if (!agreed) {
      alert("You must agree to the terms and conditions to continue.");
      return;
    }

    // when all validations checked, redirects the user to the home page
    window.location.href = "userHome.html";
  });

  // click event listener for the signup button to redirect to the sign up page
  signupBtn.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
});
