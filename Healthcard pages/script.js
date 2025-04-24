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
    {
      title: "Learning",
      question: "How confident are you that we can release updates smoothly and without major issues?"},
    {
      title: "Fun",
      question: "How much do you enjoy working with this team?"
    },
    {
      title: "Mission",
      question: "How connected do you feel to the team's mission and purpose?"
    },
    {
      title: "Pawns or Players",
      question: "How much influence do you feel you have over team decisions and direction?"
    },
    {
      title: "Suitable Process",
      question: "How well do our processes support effecient and effective work?"
    },
    {
      title: "Speed",
      question: "How sustainable and effective is our team's pace of work?"
    },
    {
      title: "Support",
      question: "How supported do you feel by your teammates and leadership?"
    },
  ];
  function updateQuestion() {
    if (index < questions.length) {
      cardTitle.textContent = questions[index].title;
      cardQuestion.textContent = questions[index].question;
    
      const percent = ((index + 1) / questions.length) * 100;
      progressText.textContent = `${index + 1} of ${questions.length}`;
      progressBar.style.width = `${percent}%`;
    } else {
      // End screen
      cardTitle.textContent = "Thank you!";
      cardQuestion.textContent = "Your feedback has been submitted.";
      document.querySelector(".shapes").style.display = "none";
      document.querySelector(".buttons").style.display = "none";
      document.querySelector(".cardBack").style.display = "none";
      progressText.textContent = "✔️";
      progressBar.style.width = `100%`;
    }
  }

  // Shape click moves to next question
  shapes.forEach(shape => {
    shape.addEventListener("click", () => {
    card.classList.add("flipped");
    });
  });

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

  // Back button
  window.goBack = function () {
    if (index > 0) {
      index--;
      updateQuestion();
    }
  };

  // Next button
  window.goNext = () => {
    if (index < questions.length - 1) {
      index++;
      updateQuestion();
    } else {
      index = questions.length;
      updateQuestion();
    }
  };

  // Exit button
  window.goHome = () => {
    alert("Going to Homepage");
  };

  updateQuestion(); 
});
