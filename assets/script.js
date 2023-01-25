// Quiz data
const questions = [
  {
    question: "What is the keyword used to create a variable?",
    answers: {
      a: "var",
      b: "let",
      c: "const",
      d: "define"
    },
    correctAnswer: "b"
  },{
      question: "JavaScript is interpreted by _________",
      answers: {
        a:"Client",
        b:"Server",
        c:"Object",
        d: "None of the above",
      },
      correctAnswer: "a"
  },{
      question: "Which of the following is not a valid JavaScript variable name?",
      answers:{
        a:"2names",
        b:"_first_and_last_names",
        c:"FirstAndLast",
        d:"None of the above",
      },
      correctAnswer: "a"
  },{
      question : "The _______ method of an Array object adds and/or removes elements from an array.",
      answers:{
          a:"Reverse",
          b:"Shift",
          c:"Slice",
          d:"Splice",
      },
      correctAnswer: "c"
  },{
      question : "Using an _______ statement is how you test for a specific condition.",
      answers:{
          a:"Select",
          b:"If",
          c:"Switch",
          d:"For",
      },
      correctAnswer: "b"
  },{
      question : "Which of the following is not considered a JavaScript operator?",
      answers:{
          a:"new",
          b:"this",
          c:"delete",
          d:"typeof",
      },
      correctAnswer: "c"
  },
];

// Select elements from DOM
const startButton = document.getElementById("start-btn");
const questionSection = document.getElementById("question-section");
const questionTitle = document.getElementById("question-title");
const answerButtons = document.querySelectorAll(".choice-button");
const finishedSection = document.getElementById("finished");
const timer = document.getElementById("countdown");
quizIntro =document.getElementById('quiz-intro');
// Global variables
let currentQuestion = 0;
let timeLeft = 75;
let intervalId;


  // Start quiz
  startButton.addEventListener("click", startQuiz);

  function startQuiz() {
      // Hide intro section and show question section
      questionSection.classList.remove("hide");
      finishedSection.classList.add("hide");
      // Hide intro
      document.querySelector(".quiz-intro").classList.add("hide");
      // Start timer
      intervalId=setInterval(countdown, 1000);
      // Display first question
      displayQuestion();
  }

// Display the current question
function displayQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionTitle.innerText = currentQuestionData.question;
  // Display the answers
  for (let i = 0; i < answerButtons.length; i++) {
    const letter = answerButtons[i].value;
    answerButtons[i].innerText = currentQuestionData.answers[letter];
  }
}

// Handle clicks on the answer buttons
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", checkAnswer);
}

let correctAnswers = 0;
let answered = false;

// Handle clicks on the answer buttons
for (let i = 0; i < answerButtons.length; i++) {
answerButtons[i].addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
// Check if the player has already answered
if (answered) {
  return;
}
answered = true;

// Disable all the answer buttons
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].disabled = true;
}

// Check if the answer is correct
const correctAnswer = questions[currentQuestion].correctAnswer;
if (event.target.value === correctAnswer) {
  event.target.classList.add("correct");
  correctAnswers++;
  // Move on to the next question
  currentQuestion++;
  if (currentQuestion === questions.length) {
    // If there are no more questions, end the quiz
    endQuiz();
  } else {
    setTimeout(() => {
      // Display the next question
      displayQuestion();
      // Enable all the answer buttons
      for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = false;
        answerButtons[i].classList.remove("correct");
      }
      answered = false;
    }, 1000);
  }
} else {
  event.target.classList.add("incorrect");
  // Subtract time for an incorrect answer
  timeLeft -= 10;
  setTimeout(() => {
      // Display the next question
      displayQuestion();
       // Enable all the answer buttons
       for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = false;
        answerButtons[i].classList.remove("incorrect");
      }
      answered = false;
    }, 1000);
}
};


// Update the timer
function countdown() {
  // Decrement the time left
  timeLeft--;
  // Update the timer display
  timer.textContent = `Time Left: ${timeLeft}s`;
  // Check if the time is up
  if (timeLeft === 0) {
    // Stop the timer
    clearInterval(timerId);
    // End the quiz
    endQuiz();
  }
};

const scoreDisplay = document.getElementById("score-display");

function endQuiz() {
   // Stop the timer
clearInterval(intervalId);
  // Show the finished section
  questionSection.classList.add("hide");
  finishedSection.classList.remove("hide");
  // Get the player's score
  const score = timeLeft;
  // Display the score
  scoreDisplay.textContent = `Your score is: ${score}`;
};

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", saveScore);
// Save the score and initials to local storage
function saveScore() {
  // Get the player's initials
  const initials = document.getElementById("initials").value;
  // Get the player's score
  const score = timeLeft;
  // Create a new score object
  const scoreObject = {initials, score};
  // Check if there are any existing scores
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  // Add the new score
  scores.push(scoreObject);
  // Sort the scores by score in descending order
  scores.sort((a, b) => b.score - a.score);
  // Save the scores to local storage
  localStorage.setItem("scores", JSON.stringify(scores));

  // Add the score to the high score list
  const li = document.createElement("li");
  li.textContent = `${initials}: ${score}`;
  highScoreList.appendChild(li);
  
  // Clear the input field
  document.getElementById("initials").value = "";
};

// View High Scores button
const highScoreView = document.getElementById("highscore-view");
const highScoreList = document.getElementById("high-score-list");
const highScoreContainer = document.getElementById("highscore-container");

highScoreView.addEventListener("click", function() {
// Get the scores from local storage
const scores = JSON.parse(localStorage.getItem("scores")) || [];
// Clear the high scores list
highScoreList.innerHTML = "";
// Display the scores
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  const li = document.createElement("li");
  li.textContent = `${score.initials}: ${score.score}`;
  highScoreList.appendChild(li);
}
// Hide the other sections
questionSection.classList.add("hide");
finishedSection.classList.add("hide");
quizIntro.classList.add('hide');
// Show the high scores section
highScoreContainer.classList.remove("hide");
});