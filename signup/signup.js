// Wait until the entire page content (HTML) is loaded before running this script
document.addEventListener("DOMContentLoaded", function () {
  
  // Pointing out the sign-up button and input fields by class and IDs
  const signUpBtn = document.querySelector(".btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Adding click event listener to the sign-up button
  signUpBtn.addEventListener("click", function (e) {
    // Prevents the default form submission to run validation checks first
    e.preventDefault();

    // Retrieves the trimmed values from the input fields (removes spaces at the start/end)
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // If any input field is empty, shows an alert and stops the process
    if (!name || !email || !password) {
      alert("Please enter your name, email, and password.");
      return; // Stops the function if any field is empty
    }

    // Shows a success alert and then redirect the user to the login page
    alert("Account created successfully");
    window.location.href = "login.html"; // Redirects to login page
  });
});
