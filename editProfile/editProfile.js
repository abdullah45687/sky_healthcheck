//STUDENT ID: W1992959 
//NAME: HADIA JAVED //

// When the page loads, check if user data exists in localStorage
window.onload = function () {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    if (user) {
        document.getElementById('editProfile-name').value = user.name || '';
        document.getElementById('editProfile-position').value = user.position || '';
        document.getElementById('editProfile-teamName').value = user.teamName || '';
        document.getElementById('editProfile-email').value = user.email || '';
        document.getElementById('editProfile-password').value = user.password || '';
    }
};

// Event listener for the 'Edit Profile' button
document.getElementById('editProfile-editBtn').addEventListener('click', function () {
    const name = document.getElementById('editProfile-name').value;
    const position = document.getElementById('editProfile-position').value;
    const teamName = document.getElementById('editProfile-teamName').value;
    const email = document.getElementById('editProfile-email').value;
    const password = document.getElementById('editProfile-password').value;

    localStorage.setItem('userProfile', JSON.stringify({ name, position, teamName, email, password }));

    alert('Profile updated!');
    window.location.href = '/accounts/home/';
});

// Event listener for the 'Back to Homepage' button
document.getElementById('editProfile-backBtn').addEventListener('click', function () {
    window.location.href = '/accounts/home/';
});
