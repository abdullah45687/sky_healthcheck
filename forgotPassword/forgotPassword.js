document.addEventListener("DOMContentLoaded", function () {
    const confirmBtn = document.querySelector(".btn");
    const emailInput = document.getElementById("email");
    const newPasswordInput = document.getElementById("new-password");
    const reenterPasswordInput = document.getElementById("reenter-password");
  
    confirmBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission
  
      const email = emailInput.value.trim();
      const newPassword = newPasswordInput.value.trim();
      const reenterPassword = reenterPasswordInput.value.trim();
  
      // Check if all fields are filled
      if (!email || !newPassword || !reenterPassword) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Check if the new password and re-entered password match
      if (newPassword !== reenterPassword) {
        alert("Passwords do not match. Please re-enter your password.");
        return;
      }  
      // If everything is valid, redirect to the login page
      window.location.href = "login.html";
    });
  });
  
