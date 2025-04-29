/* 
STUDENT ID: W1992959 
NAME: HADIA JAVED 
*/

document.addEventListener("DOMContentLoaded", function () {
    // get the voting page button
    const votingPageButton = document.getElementById('votingPageBtn');

    // get the previous votes button
    const previousVotesButton = document.getElementById('previousVotesBtn');

    // get the profile image
    const profileImage = document.querySelector('.user-home-profile-image');

    // when user clicks voting page button, go to voting page
    votingPageButton.addEventListener('click', () => {
        window.location.href = '/accounts/voting-page/';
    });

    // when user clicks previous votes button, go to previous votes page
    previousVotesButton.addEventListener('click', () => {
        window.location.href = '/accounts/previous-votes/';
    });

    // when user clicks profile image, go to edit profile page
    profileImage.addEventListener('click', () => {
        window.location.href = '/accounts/edit-profile/';
    });
});
