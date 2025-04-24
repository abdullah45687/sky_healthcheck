// Load user data on page load
window.onload = function () {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    if (user) {
      document.getElementById('name').value = user.name || '';
      document.getElementById('position').value = user.position || '';
      document.getElementById('teamName').value = user.teamName || '';
      document.getElementById('email').value = user.email || '';
      document.getElementById('password').value = user.password || '';
    }
  };
  
  // Save updated profile
  document.getElementById('editBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const teamName = document.getElementById('teamName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    localStorage.setItem('userProfile', JSON.stringify({ name, position, teamName, email, password }));
  
    alert('Profile updated!');
  });
  
  // Redirect to homepage
  document.getElementById('back').addEventListener('click', function () {
    window.location.href = 'userHome.html';
  });
  
