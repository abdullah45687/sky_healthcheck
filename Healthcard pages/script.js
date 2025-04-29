//Created by Rahma 
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card")
  const cardTitle = document.getElementById("cardtitle");
  const cardQuestion = document.getElementById("cardQstn");
  const shapes = document.querySelectorAll(".shape");
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");

  let index = 0;

const questions = [
    {
  // Hadia New Question 1
    title: "Value Delivery",
    question: "How well do you think our team is at delivering value to customers and stakeholders?"
    },
  // Hadia New Question 2
    {
    title: "Communication",
    question: "How would you rate the effectiveness of your team's communication?"
    },
  // Hadia New Question 3
    {
    title: "Release Confidence",
    question: "How confident are you that we can release updates smoothly and without major issues?"
    },
  // Question 4
    {
      title: "Learning",
      question: "How confident are you that we can release updates smoothly and without major issues?"},
   // Question 5
    {
      title: "Fun",
      question: "How much do you enjoy working with this team?"
    },
   // Question 6
    {
      title: "Mission",
      question: "How connected do you feel to the team's mission and purpose?"
    },
   // Question 7
    {
      title: "Pawns or Players",
      question: "How much influence do you feel you have over team decisions and direction?"
    },
   // Question 8
    {
      title: "Suitable Process",
      question: "How well do our processes support effecient and effective work?"
    },
   // Question 9
    {
      title: "Speed",
      question: "How sustainable and effective is our team's pace of work?"
    },
   // Question 10
    {
      title: "Support",
      question: "How supported do you feel by your teammates and leadership?"
    },
  ];
  //This code is used for the function of the question. Allwing to move to the next questions and back. 
  function updateQuestion() {
    if (index < questions.length) {
      cardTitle.textContent = questions[index].title;
      cardQuestion.textContent = questions[index].question;
      
    //This is used for the function of the progress bar 
      const percent = ((index + 1) / questions.length) * 100;
      progressText.textContent = `${index + 1} of ${questions.length}`;
      progressBar.style.width = `${percent}%`;
    } else {
      
      // Function after the user has submitetd the form. 
      cardTitle.textContent = "Thank you!";
      cardQuestion.textContent = "Your feedback has been submitted.";
      document.querySelector(".shapes").style.display = "none";
      document.querySelector(".buttons").style.display = "none";
      document.querySelector(".cardBack").style.display = "none";
      progressText.textContent = "✔️";
      progressBar.style.width = `100%`;
    }
  }

  // When clicking on the shapes, it will flip the card to leave comment
  shapes.forEach(shape => {
    shape.addEventListener("click", () => {
    card.classList.add("flipped");
    });
  });
  
// After clicking the submit button, it will move on to the next question
  window.submitComment = () => {
    const comment = document.getElementById("commentbox").value;
    console.log(`User's comment: ${comment}`);
    document.getElementById("commentbox").value = "";
    setTimeout(() => {
      card.classList.remove('flipped');
      index++;
    updateQuestion();
    }, 500);
    
  }

  // Button to go back to the question
  window.goBack = function () {
    if (index > 0) {
      index--;
      updateQuestion();
    }
  };

  // Button to go to the next question
  window.goNext = () => {
    if (index < questions.length - 1) {
      index++;
      updateQuestion();
    } else {
      index = questions.length;
      updateQuestion();
    }
  };

  //Button to go to the homepage
  window.goHome = () => {
    alert("Are you sure that you want to go to the home page?");
  };

  updateQuestion(); 
});
